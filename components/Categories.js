import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

import Category from "./Category";
const Categories = (props) => {
  const [data, setData] = useState([]);
  const navigationHandler = () => {
    props.navigation.navigate("CategoryScreen");
  };
useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`).then(
        (res) => {
          return res.json();
        }
      )
      .then((data) => {
          setData(data.categories)
      })

}, [])


const renderItem = ({item}) => (
  
    <Category
    name={item.strCategory}
  
  />
)

  return (
    <SafeAreaView style={styles.container}>
      <View>
      
        {data.length>0 && ( <FlatList
          data={data}
          key={"2"}
          keyExtractor={(item) => item.idCategory}
          renderItem={renderItem}
          numColumns={2}
          style={styles.listContainer}
        />)}
       
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding: 8,
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
    textAlign: "center",
  },
});

export default Categories;
