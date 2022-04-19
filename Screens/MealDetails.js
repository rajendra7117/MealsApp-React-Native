import { useEffect, useState, useLayoutEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { FavoriteContext } from "../Store/FavoriteContext";

import { Entypo } from "@expo/vector-icons";
import Ingredient from "../components/Ingredient";
const MealDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const FavContext = useContext(FavoriteContext)
   const [isMealFavorite, setIsMealFavorite] = useState(false)

  const pressHandler = () => {
   
    if(isMealFavorite){
      FavContext.removeFavorite(route.params.id)
      setIsMealFavorite(false)
      console.log('rem')
    }
    else{
      FavContext.addFavorite({itemName: route.params.itemName, img: route.params.image, id: route.params.id})
      setIsMealFavorite(true)
      console.log('add')
    }
   
  }
  useLayoutEffect(() => {
  
    FavContext.favorites?.forEach((fav) =>{
      if(fav.itemName===route.params.itemName){
       setIsMealFavorite(true)
      }
    })
    navigation.setOptions({
      title: route.params.itemName,
      headerStyle: { backGroundColor: "#ffffff" },
      headerRight: (color, size) => {
        return (
          <View>
         
            <Pressable onPress={pressHandler} android_ripple={{color: '#000000'}}>
            <Text>
            <Entypo name={isMealFavorite ? 'heart' : 'heart-outlined'} size={24} color="#FD5D5D" />
            </Text>
            </Pressable>
          
          </View>
          
        );
      },
    });
   
  }, [FavContext, isMealFavorite]);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${route.params.itemName}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.meals[0]);
      });
     
  }, []);

  return (
    <View style={styles.detailContainer}>
      <Image source={{ uri: route.params.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{route.params.itemName}</Text>
       
      </View>
      <View style={styles.ScrollContainer}>
        <ScrollView>
          <Text style={styles.heading}>
            Ingredients <Entypo name="bowl" size={24} color="black" />
          </Text>
          <View style={styles.slideContainer}>
            <ScrollView style={styles.ScrollContainer} horizontal>
              {Object.keys(data).map((key) => {
                if (key.startsWith("strIngredient") && data[key] !== "") {
                  return <Ingredient ing={data[key]} key={key} />;
                }
              })}
            </ScrollView>
          </View>

          <View style={styles.ScrollContainer}>
            <Text style={styles.heading}>
              Instructions{" "}
              <Entypo name="info-with-circle" size={24} color="black" />
            </Text>
            <ScrollView style={styles.scrollText}>
              <Text>{data.strInstructions}</Text>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  detailContainer: {
    width: "100%",
    height: "100%",
    padding: 7,
    elevation: 10,
    shadowColor: "#000",

    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 6,
    marginBottom: 5,
  },
  nameText: {
    fontSize: 17,
    fontWeight: "600",
    marginVertical: 6,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  ScrollContainer: {
    flex: 1,
    marginVertical: 5,
  },
  slideContainer: {
    flexDirection: "row",
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
