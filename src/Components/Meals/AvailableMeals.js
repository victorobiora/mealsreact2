import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import useRequest from '../../store/useRequest';
import { useEffect } from 'react';



const AvailableMeals = () => {

  const {makeRequest, fetchData: loadedMeals } = useRequest()

  useEffect(()=> {
      makeRequest('GET')
  },[makeRequest])


  

  const mealsList = loadedMeals.map(meal => 
  <MealItem 
  key={meal.id} 
  id= {meal.id}
  price = {meal.price}
  description = {meal.description}
  name = {meal.name}/>)
    return <Card>
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
    </section>
    </Card> 
}

export default AvailableMeals;