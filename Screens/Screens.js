import { createDrawerNavigator } from "@react-navigation/drawer"
import FavoritesScreen from "./FavoritesScreen"
import WelcomeScreen from "./WelcomeScreen"
import Categories from "../components/Categories"
export const Screens = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{headerStyle: {
            backgroundColor: '#F9F9F90',
          },}} >
            <Drawer.Screen name="welcome screen"  component={WelcomeScreen}/>
            <Drawer.Screen name="Meal Categories" component={Categories} />
            <Drawer.Screen name="Favorites"  component={FavoritesScreen}/>
        </Drawer.Navigator>
    )
}