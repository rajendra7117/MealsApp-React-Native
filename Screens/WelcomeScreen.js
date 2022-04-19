import { View, Text, StyleSheet, ImageBackground } from "react-native";
import image from '../assets/home.jpg'
const WelcomeScreen = () => {

  return (
   <View style={styles.container}>
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>   
     <Text style={styles.text}>Welcome to Meals App</Text>
      </ImageBackground>
     
   </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image:{
    flex: 1,
    justifyContent: 'center'
  },
  text:{
    textAlign: 'center',
    fontSize: 30,
    color: '#001E6C',
    fontWeight: 'bold',
    lineHeight:84,
    backgroundColor: '#F9F9F9'
    
  }
});
