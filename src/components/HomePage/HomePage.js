import React, {useState, useEffect} from 'react';
import './HomePage.css';
import { Box, Text, Flex, Heading, HStack, Button, Tabs, Tab, TabList, TabPanels, TabPanel} from '@chakra-ui/react'
import { ImageSlider } from '../ImageSlider/ImageSlider'
//---COMPONENTS---
import {GameCardContainer} from '../GameCardContainer/GameCardContainer';


export const HomePage = ({data, isLoaded}) => {



  console.log("GAME CONTAINER", data)
    return (
      <Box h='100vh' w='auto' background='blue.200'>
        <Flex h='100%' w='auto' flexDirection='column' overflowX='scroll' bg='white' alignItems='center'>
            <Box h='auto' w='100%' background='gray.300' flexDirection='column' alignItems='center'>
                <Heading>New & Trending</Heading>
                <ImageSlider />
            </Box>
            <Flex h='auto' w='100%' flexDirection='column' alignItems='center' mt={5} mb={20}>
              <Tabs w='100%' p={5}>
                <TabList w='100%' overflowX='scroll' overflowY='hidden'>
                  <Tab>Recent</Tab>
                  <Tab>Trending</Tab>
                  <Tab>Deals</Tab>
                  <Tab>Upcoming</Tab>
                </TabList>
              </Tabs>
                <GameCardContainer data={data} isLoaded={isLoaded}/>
                  <Button mt={5} mb={5}>Next Page</Button>
            </Flex>
        </Flex>
      </Box>
    )
}