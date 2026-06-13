import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)


// "Children" is anything that is inside of the component that is rendered
export const MovieProvider = ({children}) => { // Provides state to any components that are wrapped around it
    const [favorites, setFavorites] = useState([]) // Local storage allows you to store things directly in your browser

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites") // Getting the items "favorites" to see if there are any

        if (storedFavs) setFavorites(JSON.parse(storedFavs)) // If there ARE favorited movies, store them in a JSON string
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites)) // Anytime the favorites state changes, update that in local storage, only runs when favorites changes
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]) // Take the previous value of the array and add the new movie
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId)) // Generate a new array without the movie that is being removed
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId) // Return true if the movie in question is already in the favorites array, if not return false
    }

    const value = { // Values that are provided to the children globally
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    
    return <MovieContext.Provider value={value}>
        {children}
        </MovieContext.Provider>
} 