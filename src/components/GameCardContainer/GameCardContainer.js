import React from 'react';
import './GameCardContainer.css';
import { Box, Text, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
// --COMPONENTS--
import {GameCard} from '../GameCard/GameCard';
// --ROUTER--
import { Link } from 'react-router-dom';


export const GameCardContainer = ({data, isLoaded}) => {

  const mapData = data.map(data => {
    return (
        <Link to={`/:${data.name}`} state={{data: data}} key={data.id}>
            <GameCard
                isLoaded={isLoaded}
                id={data.id}
                key={data.id} 
                name={data.name} 
                background={data.cover.url} 
                genres={data.genres}
                stoyrline={data.storyline}
                summary={data.summary}
                ratings={data.aggregated_rating}
                released={data.release_dates}
                screenshots={data.screenshots}
            />
        </Link>
    )
})


    return (
      <>
          <SimpleGrid className='GRID' h='100%' w='100%' columns={[1, 2, 2, 2, 3]} spacing='40px' p={[0, 5]} align='center'>
            {mapData}
          </SimpleGrid>
      </>
    )
}