import React, { useState, useEffect } from 'react'
import './Categories.css'
import { Box, Container, SimpleGrid, HStack, Tooltip, Icon, Button, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react'
// --APICALL--
import { findGameGenre } from '../../utils/apiCalls'
// --COMPONENT--
import { GameCardContainer } from '../GameCardContainer/GameCardContainer';
import { GameCard } from '../GameCard/GameCard';
// --ROUTER--
import { Link } from 'react-router-dom';

const genres = [
    { name: "ADVENTURE ", id: 31 },
    { name: "ARCADE", id: 33 },
    { name: "CARD AND BOARD", id: 35 },
    { name: "FIGHTING", id: 4 },
    { name: "HACK AND SLASH", id: 25 },
    { name: "INDIE", id: 32 },
    { name: "MOBA", id: 36 },
    { name: "MUSIC", id: 7 },
    { name: "PINBALL", id: 30 },
    { name: "PLATFORM", id: 8 },
    { name: "POINT AND CLICK", id: 2 },
    { name: "TRIVIA", id: 26 },
    { name: "RACING", id: 10 },
    { name: "RTS", id: 11 },
    { name: "RPG", id: 12} ,
    { name: "SHOOTER", id: 5 },
    { name: "SIMULATION", id: 13 },
    { name: "SPORTS", id: 14 },
    { name: "STRATEGY", id: 15 },
    { name: "TACTICAL", id: 24 },
    { name: "TURN BASED", id: 16} ,
    { name: "VISUAL NOVEL", id: 34 }
]

const TabContent = ({ selectedGenre }) => {
    // use hook lazy load data
    const [category, setCategory] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const id = genres[selectedGenre].id
    const dataID = { id }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(dataID)
    };
    useEffect(() => {
        findGameGenre(options)
        .then(results => {
            setIsLoaded(true)
            console.log(results)
            setCategory(results.filter(data => data.cover))
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    const displayData = category.map(data => {
        return (
        <Link to={`/:${data.name}`} state={{data: data}} key={data.id}>
            <GameCard
                isLoaded={isLoaded}
                id={data.id}
                key={data.id} 
                name={data.name} 
                background={data.cover.url} 
                genres={data.genres}
                platforms={data.platforms}
                ratings={data.aggregated_rating}
                released={data.release_dates}
                screenshots={data.screenshots}
            />
        </Link>
        )
    })

    return (
        <Box maxH='100%' maxW='100%' overflow='hidden' >
            <Flex h='25em' bg='gray.800' flexDir='column' boxShadow='dark-lg' rounded='md'>
                <Text color='white' align='center' className='TEXT' m='2'>{genres[selectedGenre].name}</Text>
                <Flex flexDir='row' overflow='scroll' p='10' h='100%'>
                    {displayData}
                    <Link to={`/Categories/:${genres[selectedGenre].name}`} state={{id: genres[selectedGenre].id}}>
                        <Button w='12em' h='15.1em' borderWidth='1px' rounded='md' boxShadow='dark-lg' position='relative' transition='500ms' _hover={{ boxShadow: 'outline', transform: 'scale(1.06)', zIndex: '1'}} m={1}>VIEW MORE</Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export const Categories = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Container h='90vh' maxW={['100vw', '75vw']} mt='10' overflow='hidden'>
            <Tabs h='100%' w={['90%', '100%']} variant='soft-rounded' isLazy onChange={setSelectedTab}>
                <TabList spacing={5} overflowY='scroll' bg='blue.900' boxShadow='dark-lg'>
                    {genres.map((genre, idx) => {
                        return (
                            <Tab className='TEXT' key={idx} color='white'>{genre.name}</Tab>
                        )
                    })}
                </TabList>
                <TabPanels>
                    {genres.map((genre, idx) => {
                        return (
                        <TabPanel h='100%' w='100%'>
                            <TabContent selectedGenre={idx} />
                        </TabPanel>)
                    })}
                </TabPanels>
            </Tabs>
        </Container>
    )
}
