import React, {useContext} from 'react'
import {View, Text, FlatList} from 'react-native'
import FavItem from '../components/FavItem'
import { FavoriteContext } from '../Store/FavoriteContext'
const FavoritesScreen = () => {
  const favCtx = useContext(FavoriteContext)
  console.log(favCtx.favorites)
  const renderItem = ({item}) => {
    return (
      <FavItem image={item.img} name={item.itemName} id={item.id}/>
    )
  }
  
  return (
    <View>
        <FlatList data={favCtx.favorites} keyExtractor={(item) => item.id} renderItem={renderItem}/>
    </View>
  )
}

export default FavoritesScreen