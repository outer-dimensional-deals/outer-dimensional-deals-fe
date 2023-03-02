import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Flex, Heading, Button, VStack } from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'
//---COMPONENTS---
import {GameCardContainer} from '../GameCardContainer/GameCardContainer';
import { Slider } from '../Slider/Slider';


export const HomePage = ({trending, anticipated}) => {
const [isLoaded, setIsLoaded] = useState(false)

useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
}, [])


    return (
      <Box h='100vh' w='auto' >
        <Flex h='100%' w='auto' flexDirection='column' overflowX='scroll' bg='white' alignItems='center'>
            {/* <Box h='auto' w='100%' flexDirection='column' alignItems='center'> */}
                {/* <ImageSlider data={data} /> */}
            {/* </Box> */}
            <Flex h='auto' w='100%' flexDirection='column' alignItems='center' mt={5} mb={20}>
              {/* <GameCardContainer data={data} isLoaded={isLoaded}/> */}
              <VStack>
                <Heading>New and Trending</Heading>
                <Slider data={trending} isLoaded={isLoaded}/>
              </VStack>
              <VStack>
                <Heading>Anticipated</Heading>
                <Slider data={anticipated} isLoaded={isLoaded}/>
              </VStack>
            </Flex>
        </Flex>
      </Box>
    )
}