import React, { useState, useEffect } from 'react'
import './GameDetails.css'
import { Box, Container, Flex, Text} from '@chakra-ui/react'
// --ROUTER--
import { useLocation } from 'react-router-dom';



export const GameDetails = (props) => {
    const location = useLocation();
    const propsData = location.state;
    const [ details, setDetails ] = useState({})
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        setDetails(propsData.data)
        setVideos(propsData.data.videos[0].video_id)
    }, [])

    console.log(propsData)
    console.log(propsData.data.videos[0].video_id)
    return (
        // <Container className='Details_Container' maxH='100em' maxW='100Vw' bg='yellow' p='10'>
            <Flex h='100%' w='100%' justifyContent='space-around' p='10'>
                <Box bg='grey' h='20em' w='40em' display='flex' justifyContent='center' alignItems='center'>
                    <iframe className='VIDEO-DISPLAY' height='97%' width="97%" src={`https://www.youtube.com/embed/${videos}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
                </Box>
                <Box h='20em' w='20em' bg='blue' rounded='2xl' display='flex' flexDirection='column' alignItems='center' p='5'>
                    <Text className='TEXT' fontSize='sm'>{details.name}</Text>
                    {/* <Text>{details.genres[0].name}</Text> */}
                    <Text>{details.summary}</Text>
                </Box>
            </Flex>
        // </Container>
    )
}