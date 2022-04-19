import { View, Text, StyleSheet, Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { colors } from "../assets/Colors/colors";

const Category = ({name}) => {
const navigation = useNavigation()
const pressHandler = () => {
  navigation.navigate('CategoryScreen', {catId: name})
}
  return (
    <View style={styles.categoryBox}>
      <Pressable android_ripple={{color:"#fff"}} style={styles.button} onPress={pressHandler}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.icon}><Ionicons name="fast-food" size={24} color="#000" /></Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    width: 140,
    height: 100,
    marginHorizontal: 15,
    marginVertical: 25,

    borderColor: '#ffffff',
    borderRadius: 3,

    elevation: 5,
    shadowColor: "#000",
   
    shadowOpacity: 0.50,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    backgroundColor: '#fff',
    
  },
  button:{
    flex: 1
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
   
  },
  title: {
    color: "#000",
    fontSize: 20,
  },
});

export default Category;
