import React from 'react';
import './GameCardContainer.css';
import { Box, Text, Flex, Heading } from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'

export const GameCardContainer = ({data}) => {

  console.log("GAME CONTAINER", data)
    return (
      <Box w='100vw' h='100vh' background='blue.200'>
        <Flex flexDirection='column' alignItems='center' justifyContent='space-around' w='100%' h='100%'>
            <Box background='gray.300'>
                <Heading>New & Trending</Heading>
                <ImageSlider />
            </Box>
            <Box background='gray.300'>
                <Heading>Special Offers</Heading>
                <Text>VISUAL CONTENT</Text>
            </Box>
        </Flex>
      </Box>
    )
}