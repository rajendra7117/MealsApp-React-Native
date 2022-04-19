import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './components/Categories';
import CategoryScreen from './Screens/CategoryScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import MealDetails from './Screens/MealDetails';
import { Screens } from './Screens/Screens';
import { NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteContextProvider from './Store/FavoriteContext';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <> 
    <StatusBar style='dark'/>
    <FavoriteContextProvider>
    <NavigationContainer >
      <Stack.Navigator style={styles.container} screenOptions={{
         headerStyle: {
          backgroundColor: '#F9F9F90',
        },
      }}>
        <Stack.Screen name="Screens" component={Screens} options={{headerShown: false}}/>
        <Stack.Screen name="Meal Categories" component={Categories} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="MealDetails" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoriteContextProvider>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#010101'
  },
});
