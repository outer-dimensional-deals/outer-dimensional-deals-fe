import React, { useState, useEffect } from 'react'
import './Favorites.css'
import { Text, Box } from '@chakra-ui/react'
import { GameCardContainer } from '../GameCardContainer/GameCardContainer'
import { displaySaved } from '../../utils/apiCalls'

export const Favorites = () => {
    const [ favorites, setFavorites ] = useState([])
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {
        displaySaved()
        .then(results => {
            console.log('favorites', results)
            setFavorites(results.games)
            setIsLoaded(true)
        })
        .catch(error => {
            console.log('error', error)
        })
    }, [])
    
    return (
        <Box h='100vh'>
            <GameCardContainer data={favorites} isLoaded={isLoaded}/>
        </Box>
    )
}