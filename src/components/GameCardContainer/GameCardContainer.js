import React from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react'
import './GameCardContainer.css';

export const GameCardContainer = () => {

    return (
      <Box w='100vw' h='100vh' background='blue.200'>
        <Flex justifyContent='center' alignItems='center' flexDirection='column'>
            <Heading>New & Trending</Heading>
            <Text>VISUAL CONTENT</Text>
            <Heading>Special Offers</Heading>
            <Text>VISUAL CONTENT</Text>
        </Flex>
      </Box>
    )
}