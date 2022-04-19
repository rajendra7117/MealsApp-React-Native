import { useEffect, useState, useLayoutEffect } from 'react/'
import {View, Text, FlatList} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';

import MealItem from '../components/MealItem';
const CategoryScreen = () => {
    const [data, setData] = useState([])
    const route = useRoute()
    const cat = route.params.catId
    const navigation = useNavigation();
    const renderItem = ({item}) => (
        <MealItem name={item.strMeal} img={item.strMealThumb} id={item.idMeal}/>
    )
    useLayoutEffect(() => {
        navigation.setOptions({title: cat, headerStyle:{backGroundColor: '#ffffff'}})
    }, [])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`).then(
            (res) => {
              return res.json();
            }
          )
          .then((data) => {
              setData(data.meals)
          })
    }, [])
  
    return (
        <View>
            {data.length>0 ? <FlatList  data={data} keyExtractor={(item) => item.idMeal} renderItem={renderItem} /> : <Text>Loading...</Text>}
            
        </View>
    )
}

export default CategoryScreen;