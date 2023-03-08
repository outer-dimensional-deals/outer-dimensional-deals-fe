import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Flex, Heading, Button, VStack, Container} from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'
//---COMPONENTS---
import {GameCardContainer} from '../GameCardContainer/GameCardContainer';
import { Slider } from '../Slider/Slider';


export const HomePage = ({trending, anticipated, isLoaded}) => {



    return (
      <Box h='100%' w='100%'>
        <Flex h='100%' w='100%' flexDirection='column' alignItems='center' justifyContent='center'>
          <Heading mt='2'>New and Trending</Heading>
          <Slider data={trending} isLoaded={isLoaded}/>
          <Heading mt='2'>Anticipated</Heading>
          <Slider data={anticipated} isLoaded={isLoaded}/>
        </Flex>
      </Box>
    )
}