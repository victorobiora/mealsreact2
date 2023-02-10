import { useCallback, useContext, useEffect, useState } from "react";
import cartContext from "./cart-context";


const useRequest = (method, newMeal) => {

    const [fetchData, setFetchData] = useState([])
    const ctx = useContext(cartContext)
    console.log(ctx)

    const makeRequest = useCallback(async () => {
        const mealsArr = []
        if (method === 'GET') {
            try {
                const req = await fetch('https://react-http-67cf3-default-rtdb.firebaseio.com/meals.json');
                const res = await req.json()

                for (const key in res) {
                    mealsArr.push(res[key])
             
                }

                setFetchData(mealsArr)

                //   ctx.addItem(res)   
            } catch (err) {
                console.log(err)
            }
        } else {
            console.log(method)
            try {
                await fetch('https://react-http-67cf3-default-rtdb.firebaseio.com/meals.json',
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
    }, [method, newMeal])

    useEffect(() => {

        makeRequest()
    }, [makeRequest])
    return { makeRequest, fetchData }
};

export default useRequest;