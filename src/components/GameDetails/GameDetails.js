import React, { useState, useEffect } from 'react'
import './GameDetails.css'
import { Box, Container, Flex, Text, Image, Tag, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel, Button} from '@chakra-ui/react'
// --ROUTER--
import { useLocation } from 'react-router-dom';
import { findGameDeals } from '../../utils/apiCalls';



export const GameDetails = (props) => {
    const location = useLocation();
    const propsData = location.state;
    const [ details, setDetails ] = useState({})
    const [ videos, setVideos ] = useState([])
    const [ photos, setPhotos ] = useState([])
    const [ genres, setGenres ] = useState([])
    const [ deals, setDeals ] = useState([])

    useEffect(() => {
        setDetails(propsData.data)
        setPhotos(propsData.data.screenshots)
        setGenres(propsData.data.genres)

        if (propsData.data.videos) {
            setVideos(propsData.data.videos)
        }  

        findGameDeals(propsData.data.name)
        .then(results => {
            console.log("deals results", results)
            setDeals(results)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    
    const genresDisplay = genres.map(element => {
        return (
            <Tag mt='2' className='TEXT'>{element.name}</Tag>
            )
        })

    const videosDisplay = videos?.map((element, index) => {
        return (
            <TabPanel>
                <iframe className='VIDEO-DISPLAY' key={index} height='400em' width="100%" src={`https://www.youtube.com/embed/${element.video_id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
            </TabPanel>
        )
    })
        
    const screenshotsDisplay = photos.map((element, index) => {
        return (
            <TabPanel>
                <Image className='VIDEO-DISPLAY' h='25em' w='100%' src={element.url.replace('t_thumb', 't_cover_big')}/>
            </TabPanel>
        )
    })

    const videosName = videos.map((element, index) => {
        return (
            <Tab>
                <Text className='TEXT'>
                    {element.name}
                </Text>
            </Tab>
        )
    })


    const screenshotsName = photos.map((element, index) => {
        return (
            <Tab>
                <Text className='TEXT'>Screenshot {index + 1}</Text>
            </Tab>
        )
    })

    const displayDeals = deals.map(element => {

        return (
            <a href={`https://www.cheapshark.com/redirect?dealID=${element.dealID}`}>
            <Flex h='100%' w='100%' justifyContent='space-between' border='1px'>
                <Text className='TEXT' ml='2'>{element.title}</Text>
                <Flex justifyContent='space-around'>
                    <Text mr='5' className='TEXT'>Normal: {element.normalPrice}</Text>
                    <Text mr='5' className='TEXT'>Sales: {element.salePrice}</Text>
                </Flex>
            </Flex>
            </a>
        )
    })

    console.log(propsData)
    return (
        <Box h='100vh' w='75vw' overflow='hidden'>
            <Flex h='90%' w='100%' p='10' flexDirection='column' overflowY='scroll'>
                <Text className='TEXT'>{details.name}</Text>
                <Flex h='90%' w='100%' justifyContent='space-around'>
                    <Box h='100%' w='60%'>
                        <Tabs variant='soft-rounded'>
                            <TabPanels>
                                {videos.length <= 0 ? null : videosDisplay}
                                {photos.length <= 0 ? null : screenshotsDisplay}
                            </TabPanels>
                            <TabList overflow='scroll' border='10px' borderStyle='outset'>
                                {videos.length <= 0 ? null : videosName}
                                {photos.length <= 0 ? null : screenshotsName}
                            </TabList>
                        </Tabs>
                    </Box>
                    <Box h='100%' w='30%' pt='4' pr='4'>
                        <Box align='center'>
                            <Image boxSize='70%' ratio={3 / 4} objectFit='cover' src={propsData.data.cover.url.replace('t_thumb', 't_cover_big')} rounded='md'/>
                        </Box>
                        <Box mt='2'>
                            {details.summary ? <Text mt='3' nb='3' className='TEXT' fontSize='20%'>{details.summary}</Text> : <Text mt='3' mb='3' className='TEXT' fontSize='20%'>{details.storyline}</Text>}
                            <Flex flexDir='column'>
                                {genresDisplay}
                                <Button mt='2' className='TEXT'>SAVE</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                <Flex h='100%' w='100%' flexDir='column' mt='10%' mb='5%'>
                    {displayDeals}
                </Flex>
            </Flex>
        </Box>
    )
}