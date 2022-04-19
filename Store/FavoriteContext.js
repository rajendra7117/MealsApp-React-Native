import { createContext, useState } from "react"
import { add } from "react-native-reanimated"

export const FavoriteContext = createContext({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {}
})

const FavoriteContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const addFavorite = (fav) => {
        setFavorites((prev) => [...prev, fav])
    }

    const removeFavorite = (id) => {
        setFavorites((fav) => fav.filter((item) => item.id!==id))
    }

    const value = {
        favorites: favorites,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
    return(
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}
export default FavoriteContextProvider;