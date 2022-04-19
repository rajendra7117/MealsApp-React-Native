import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const MealItem = ({ name, img, id }) => {
    const navigation = useNavigation()
    const pressHandler = () => {
        
        navigation.navigate('MealDetails', {itemName: name, image: img, id: id})
   
    }
  return (
    <View style={styles.mealItem}>
      <Image source={{ uri: img }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Read Recipe <AntDesign name="arrowright" size={14} color="black" />
        </Text>
        <Text>
          <Pressable onPress={pressHandler}>
            <Text>
            
              <Entypo name="open-book" size={28} color="black" />
            </Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "#ffffff",
    marginHorizontal: 15,
    marginVertical: 25,

    borderRadius: 3,

    elevation: 5,
    shadowColor: "#000000",

    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,

    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#000",
    padding: 9,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  infoContainer: {
    width: "80%",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  infoText: {
    display: "flex",
    textAlign: "center",
    marginTop: 6,
  },
});
