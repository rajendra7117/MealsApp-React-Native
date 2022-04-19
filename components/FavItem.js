import {useContext} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { FavoriteContext } from '../Store/FavoriteContext';
const FavItem = ({name, image, id}) => {
   const favCtx = useContext(FavoriteContext)
   const pressHandler = () => {
       favCtx.removeFavorite(id)
   }
    return (
        <View style={styles.container}>
           <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.text}>
                {name}
            </Text>
            <Pressable onPress={pressHandler}>
            <Text style={styles.icon}><Entypo name="heart" size={25} color="#FD5D5D"/></Text>
            </Pressable>
        </View>
    )
}

export default FavItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 100,
        flexDirection: 'row',
        elevation: 4,
        backgroundColor: '#ffffff',
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset:{width: 0, height:2},
        shadowOpacity: 0.25,
        shadowRadius: 6,
        borderRadius: 8,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text:{
        fontSize: 12,
        color: '#000',
        marginLeft: 5,
        marginRight: 'auto'
        
    },
    image: {
        width: 100,
        height: 100,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8
    },
    icon:{
       marginRight: 2
         
       }
   
})