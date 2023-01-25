import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Text, Flex, Heading, extendTheme} from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'
//---COMPONENTS---
import {GameCardContainer} from '../GameCardContainer/GameCardContainer';


export const HomePage = ({data, isLoaded}) => {



  console.log("GAME CONTAINER", data)
    return (
      <Box h='100vh' w='auto' background='blue.200'>
        <Flex h='100%' w='auto' flexDirection='column' overflow='scroll' bg='white' alignItems='center'>
            <Box h='auto' w='100%' background='gray.300' flexDirection='column' alignItems='center'>
                <Heading>New & Trending</Heading>
                <ImageSlider />
            </Box>
            <Box h='auto' w='100%' bg='green'>
                <Text>Button option list</Text>
                <GameCardContainer data={data} isLoaded={isLoaded}/>
            </Box>
        </Flex>
      </Box>
    )
}