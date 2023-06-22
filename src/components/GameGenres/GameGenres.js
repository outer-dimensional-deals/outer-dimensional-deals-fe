import React, { useState, useEffect } from 'react';
import './GameGenres.css';
import { Box, Container } from '@chakra-ui/react'
// --APICALL--
import { findFullGameGenre } from '../../utils/apiCalls';
// --COMPONENTS--
import { GameCardContainer } from '../GameCardContainer/GameCardContainer';
// --ROUTER--
import { Link, useLocation } from 'react-router-dom';

export const GameGenres = (props) => {
    const location = useLocation();
    const propsData = location.state;
    const [genreStack, setGenreStack] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(propsData)
    };

    useEffect(() => {
        findFullGameGenre(options)
        .then(results => {
            console.log(results)
            setGenreStack(results.filter(data => data.cover))
            setIsLoaded(true)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container maxW='container.lg'>
            <Box h='40em' overflow='scroll' align='center'>
                <GameCardContainer data={genreStack} isLoaded={isLoaded}/>
            </Box>
        </Container>
    )
}