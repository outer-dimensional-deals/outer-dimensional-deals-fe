import React from 'react';
import './GameCardContainer.css';
import { Box, Text, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {GameCard} from '../GameCard/GameCard';


export const GameCardContainer = ({data, isLoaded}) => {

  const mapData = data.map(data => {
    return (
        <Link to={`/:${data.name}`} state={{data: data}} key={data.id}>
            <GameCard
                isLoaded={isLoaded}
                id={data.id}
                key={data.id} 
                name={data.name} 
                background={data.background_image} 
                esbr={data.esrb_rating}  
                genres={data.genres}
                metacritic={data.metacritic}
                platforms={data.parent_platforms}
                ratings={data.ratings}
                released={data.released}
                screenshots={data.short_screenshots}
                tags={data.tags}
            />
        </Link>
    )
})


  console.log("GAME CONTAINER", data)
    return (
      <>
        {/* <SimpleGrid columns={[1, 2, 3, 4]} spacing='10px' >
            {mapData}
        </SimpleGrid> */}
        <Flex h='100%' w='100%' flexDirection='column' alignItems='center' mb={20}>
            {mapData}
        </Flex>
        
      </>
    )
}