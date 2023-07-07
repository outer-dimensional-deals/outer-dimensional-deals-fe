import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'
//---COMPONENTS---
import {GameCardContainer} from '../GameCardContainer/GameCardContainer';
import { Slider } from '../Slider/Slider';


export const HomePage = ({searchResults, isLoaded}) => {



    return (
          <Flex h='40em' w='100%' direction='column' align='center' overflowY='scroll'>
            {searchResults.length > 0 ? <Box h='auto' w='90%' bg='gray.800' rounded='md' p='10' mb='10' mt='10'>
              <GameCardContainer data={searchResults} isLoaded={isLoaded}/>
            </Box> : null}
          </Flex>
    )
}