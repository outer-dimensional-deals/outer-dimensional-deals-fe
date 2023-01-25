import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Text, Flex, Heading, HStack, Button} from '@chakra-ui/react'
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
            <Flex h='auto' w='auto' flexDirection='column' alignItems='center' mt={5} mb={20}>
                <HStack w='100%' justifyContent='center' alignItems='center' mt={5} mb={10}>
                  <Button>Recently Released</Button>
                  <Button>Coming Soon</Button>
                  <Button>Popular Upcoming</Button>
                </HStack>
                <GameCardContainer data={data} isLoaded={isLoaded}/>
                  <Button mt={5} mb={5}>Next Page</Button>
            </Flex>
        </Flex>
      </Box>
    )
}