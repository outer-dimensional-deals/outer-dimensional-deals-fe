import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'
//---COMPONENTS---
import {GameCardContainer} from '../GameCardContainer/GameCardContainer';


export const HomePage = ({data, title}) => {
const [isLoaded, setIsLoaded] = useState(false)

useEffect(() => {
  if (data.length === 0) {
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  }

}, [])

    return (
      <Box h='100vh' w='auto' >
        <Flex h='100%' w='auto' flexDirection='column' overflowX='scroll' bg='white' alignItems='center'>
            {/* <Box h='auto' w='100%' flexDirection='column' alignItems='center'> */}
                <Heading>{title}</Heading>
                {/* <ImageSlider data={data} /> */}
            {/* </Box> */}
            <Flex h='auto' w='100%' flexDirection='column' alignItems='center' mt={5} mb={20}>
              <GameCardContainer data={data} isLoaded={isLoaded}/>
              <Button mt={5} mb={5}>Next Page</Button>
            </Flex>
        </Flex>
      </Box>
    )
}