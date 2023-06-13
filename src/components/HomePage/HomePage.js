import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Flex, Heading, Button, VStack, Container } from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'
//---COMPONENTS---
import {GameCardContainer} from '../GameCardContainer/GameCardContainer';
import { Slider } from '../Slider/Slider';


export const HomePage = ({trending, anticipated, isLoaded}) => {



    return (
         <Box>
          <Heading>Spotlight</Heading>
          <Tex>Will Show three games, a tv and a small console which will have the option to add and remove games</Tex>
         </Box>
    )
}