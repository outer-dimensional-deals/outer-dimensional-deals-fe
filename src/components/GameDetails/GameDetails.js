import React, { useState, useEffect } from 'react'
import './GameDetails.css'
import { Box, Container, Flex, Text, Image, Tag, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Icon} from '@chakra-ui/react'
// --ROUTER--
import { useLocation } from 'react-router-dom';
import { displaySaved, findGameDeals, saveData, deleteData } from '../../utils/apiCalls';
import { IoIosHeart, IoIosHeartHalf, IoIosHeartEmpty } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa'



export const GameDetails = (props) => {
    const location = useLocation();
    const propsData = location.state;
    const [ details, setDetails ] = useState({})
    const [ videos, setVideos ] = useState([])
    const [ photos, setPhotos ] = useState([])
    const [ genres, setGenres ] = useState([])
    const [ deals, setDeals ] = useState([])
    const [ isDisabled, setIsDisabled ] = useState(false)

    useEffect(() => {
        setDetails(propsData.data)
        setPhotos(propsData.data.screenshots)
        setGenres(propsData.data.genres)
        
        if (propsData.data.videos) {
            setVideos(propsData.data.videos)
        }  
        
        Promise.all([findGameDeals(propsData.data.name), displaySaved()])
        .then(results => {
            setDeals(results[0])
            checkDisabled(results[1].games)
        })
        .catch(error => {
            console.log(error)
        })

    }, []);
    
    const genresDisplay = genres.map((element, index) => {
        return (
            <Tag mt='2' className='TEXT' color='blue.200' bg='blue.900' key={index}>{element.name}</Tag>
            )
        })

    const videosDisplay = videos.map((element, index) => {
        return (
            <TabPanel key={index}>
                <iframe className='VIDEO-DISPLAY' key={index} height='400em' width="100%" src={`https://www.youtube.com/embed/${element.video_id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
            </TabPanel>
        )
    })
        
    const screenshotsDisplay = photos?.map((element, index) => {
        return (
            <TabPanel>
                <Image className='VIDEO-DISPLAY' h='25em' w='100%' src={element.url.replace('t_thumb', 't_cover_big')} />
            </TabPanel>
        )
    })

    const videosName = videos.map((element, index) => {
        return (
            <Tab key={index}>
                <Text className='TEXT' color='white'>
                    {element.name}
                </Text>
            </Tab>
        )
    })


    const screenshotsName = photos?.map((element, index) => {
        return (
            <Tab key={index}>
                <Text className='TEXT' color='white'>Screenshot {index + 1}</Text>
            </Tab>
        )
    })

    const displayDeals = deals.map(element => {

        return (
            <Box mt='10px' bg='gray.800' boxShadow='dark-lg' _hover={{color: 'blue.300'}} key={element.dealID}>
            <a href={`https://www.cheapshark.com/redirect?dealID=${element.dealID}`}>
            <Flex h='100%' w='100%' justifyContent='space-between' border='1px'>
                <Text className='TEXT' ml='2' color='white'>{element.title}</Text>
                <Flex justifyContent='space-around'>
                    <Text mr='3' className='TEXT' color='white'>Normal: {element.normalPrice}</Text>
                    <Text color='white' mr='3'>|</Text>
                    <Text mr='3' className='TEXT' color='white'>Sales: {element.salePrice}</Text>
                </Flex>
            </Flex>
            </a>
            </Box>
        )
    })

    const checkDisabled = (results) => {
        console.log(results)
        let checked = results.find((element) => element.id === propsData.data.id)

        setIsDisabled(checked ? true : false)
    }

    const saveGameToCloud = () => {
        const postObject = {
            id: propsData.data.id,
            name: propsData.data.name,
            cover: propsData.data.cover,
            genres: propsData.data.genres,
            platforms: propsData.data.platforms,
            release_dates: propsData.data.release_dates,
            screenshots: propsData.data.screenshots,
            summary: propsData.data.summary,
            deals: deals
        }
        postSavedData(postObject) 
    }

    const postSavedData = (postObject) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(postObject)
        };

        saveData(options)
        .then(results => {
            console.log(results)
            setIsDisabled(true)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const deleteFromCloud = () => {
        const postObject = {
            id: propsData.data.id,
            name: propsData.data.name,
            cover: propsData.data.cover,
            genres: propsData.data.genres,
            platforms: propsData.data.platforms,
            release_dates: propsData.data.release_dates,
            screenshots: propsData.data.screenshots,
            summary: propsData.data.summary,
            deals: deals
        }
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(postObject)
        };
        setIsDisabled(false)

        deleteData(options)
    }

    return (
        <Box h='100vh' w='75vw' overflow='hidden'>
            <Flex h='100%' w='100%' p='10' flexDirection='column' overflowY='scroll'>
                <Text className='TEXT' color='white' bg='blue.900'>{details.name}</Text>
                <Flex h='90%' w='100%' justifyContent='space-around' bg='gray.800' boxShadow='lg'>
                    <Box h='100%' w='60%' bg='blackAlpha.400' boxShadow='dark-lg'>
                        <Tabs variant='soft-rounded'>
                            <TabPanels>
                                {videos.length <= 0 ? null : videosDisplay}
                                {!photos || photos.length <= 0 ? null : screenshotsDisplay}
                            </TabPanels>
                            <TabList overflow='scroll' border='10px' bg='blue.900' mb='2%' boxShadow='dark-lg'>
                                {videos.length <= 0 ? null : videosName}
                                {!photos || photos.length <= 0 ? null : screenshotsName}
                            </TabList>
                        </Tabs>
                    </Box>
                    <Box h='100%' w='30%' pt='4' pr='4' pl='4' mb='2%' bg='blackAlpha.400' boxShadow='dark-lg'>
                        <Box align='center'>
                            <Image boxSize='60%' ratio={3 / 4} objectFit='cover' src={propsData.data.cover.url.replace('t_thumb', 't_cover_big')} rounded='md' boxShadow='lg' />
                        </Box>  
                        <Box h='15%' mt='2' overflow='hidden'>
                            <Box h='100%' overflow='scroll'>
                            {details.summary ? <Text mt='1' className='TEXT' fontSize='20%' color='white'>{details.summary}</Text> : <Text mt='3' mb='3' className='TEXT' fontSize='20%'>{details.storyline}</Text>}
                            </Box>
                        </Box>
                            <Flex flexDir='column'>
                                {genresDisplay}
                                <Flex flexDir='default' justifyContent='space-between'>
                                    <Button mt='2' className='TEXT' boxShadow='dark-lg' bg='blue.900' isDisabled={isDisabled} onClick={() => saveGameToCloud()}>
                                        <Text color='white'>SAVE</Text>
                                        <Icon as={IoIosHeart} color='white'/>
                                        <Icon as={IoIosHeartHalf} color='white'/>
                                        <Icon as={IoIosHeartEmpty} color='white'/>
                                    </Button>
                                    <Button mt='2' bg='red.600' className='TEXT' isDisabled={!isDisabled} onClick={() => deleteFromCloud()}>
                                        <Text color='white'>DELETE</Text>
                                        <Icon as={FaTrash} color='white'/>
                                    </Button>
                                </Flex>
                            </Flex>
                    </Box>
                </Flex>
                <Flex h='100%' w='100%' flexDir='column' mt='5%' mb='20%' bg='blue.800'>
                    {displayDeals}
                </Flex>
            </Flex>
        </Box>
    )
}