import { useCallback, useEffect, useState } from "react";



const useRequest = () => {

    const [fetchData, setFetchData] = useState([])

    const makeRequest = useCallback(async (method, newMeal) => {
        const mealsArr = []
        if (method === 'GET') {
            try {
                const req = await fetch('https://react-http-67cf3-default-rtdb.firebaseio.com/meals.json');
                const res = await req.json()

                for (const key in res) {
                    mealsArr.push(res[key])

                }

                setFetchData(mealsArr)
            } catch (err) {
                console.log(err)
            }
        } else {

            try {
                await fetch('https://react-http-67cf3-default-rtdb.firebaseio.com/orders.json',
                    {
                        method: method,
                        body: JSON.stringify(newMeal),
                        headers: {
                            'Content-Type': 'application/json',
                        }

                    });
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    useEffect(() => {

        makeRequest()
    }, [makeRequest])
    return { makeRequest, fetchData }
};

export default useRequest;