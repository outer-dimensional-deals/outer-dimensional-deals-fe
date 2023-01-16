import React, { useState, useEffect } from 'react';
import './SideBar.css';
import { Box, Text, Flex, Button, IconButton, Icon, Stack, Image, useDisclosure, Tabs, Tab, TabList, TabPanels, TabPanel, ButtonGroup} from '@chakra-ui/react';
// --- CHAKRA ICONS ---
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
// --- REACT ICONS ---
import { IoGameController, IoPersonSharp } from 'react-icons/io5';
import { MdLocalGroceryStore } from 'react-icons/md'
import { 
    FaHashtag, 
    FaCode, 
    FaPaperPlane, 
    FaTheaterMasks,  
} from 'react-icons/fa';
// --DUMBY DATA--
import { genres } from '../../dumby-data/genresData';
import { cheapshark } from '../../dumby-data/cheapSharkStoresData';
import { parentPlatforms } from '../../dumby-data/parentPlatformsData';

export const SideBar = ({storesApiCall, filterGamesByParameter}) => {

    const { isOpen, onOpen, onClose,  onToggle} = useDisclosure();

//--GENRES BUTTON GROUP--
const genresList = genres.map(genre => {
    return ( 
        <Button leftIcon={genre.icon} onClick={event => filterGamesByParameter(`games?genres=${event.target.value}`)} value={genre.id}>{genre.name}</Button>
    )
})
//--PLATFORMS BUTTON GROUP--
const platformsList = parentPlatforms.map(platform => {
    return (
        <Button leftIcon={platform.icon} onClick={event => filterGamesByParameter(`games?parent_platforms=${event.target.value}`)} value={platform.id}>{platform.name}</Button>
    )
})
//--STORES BUTTON GROUP---
const cheapsharkStoresList = cheapshark.map(store => {
    return (
        <Button leftIcon={store.images !== null ? store.images : ''}>{store.storeName}</Button>
    )
})


    return (
        <>
        {!isOpen &&  
        <Box w='28em' h='100vh' background='green.100' className='SideBar'>
               <Tabs isFitted w='100%' h='100%' orientation='vertical' variant='enclosed'>
                 <TabList aria-orientation='vertical'>
                    <Tab>
                        <Image borderRadius='full' boxSize='10' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                    </Tab>
                    <Tab>
                        <Icon boxSize='10' rounded='md' as={FaTheaterMasks} backgroundColor='gray.200' boxShadow='base'/>
                     </Tab>
                    <Tab>
                        <Icon boxSize='10' rounded='md' as={MdLocalGroceryStore} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon boxSize='10' rounded='md' as={FaHashtag} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon boxSize='10' rounded='md' as={IoGameController} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon boxSize='10' rounded='md' as={IoPersonSharp} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon boxSize='10' rounded='md' as={FaCode} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon boxSize='10' rounded='md' as={FaPaperPlane} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' align='center' as='b'>USERNAME</Text>
                            <Text>USER EMAIL</Text>
                            <Text>FRIENDS</Text>
                            <Text>UPDATE USER INFO</Text>
                            <Text>USER FAVORITES</Text>
                        </Stack>
                    </TabPanel>
                    <TabPanel w='100%' h='100%'>
                        <Stack direction='column' spacing='2' w='100%' h='100%'>
                            <Text fontSize='md' align='center' as='b'>GENRES</Text>
                            {genresList}
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' align='center' as='b'>WISHLIST</Text>
                            <Button>TOP DEALS</Button>
                            <Button onClick={() => {}}>YOUR WISHLIST</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' align='center' as='b'>TAGS</Text>
                            <Button onClick={event => {}} value='favorite-tags'>Favorite Tag</Button>
                            <Button onClick={event => {}} value='tags'>All Tags</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='2' w='100%' h='100%'>
                            <Text fontSize='md' align='center' as='b'>PLATFORMS</Text>
                            {platformsList}
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' align='center' as='b'>CREATORS</Text>
                            <Button onClick={event => {}} value='creators'>Your Favorite Creators</Button>
                            <Button onClick={event => {}} value='favorite-creators'>View list</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' align='center' as='b'>DEVELOPERS</Text>
                            <Button onClick={event => {}} value='developers'>Your Favorite Creators</Button>
                            <Button onClick={event => {}} value='favorite-developers'>View list</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' align='center' as='b'>PUBLISHER</Text>
                            <Button onClick={event => {}} value='publishers'>Your Favorite Creators</Button>
                            <Button onClick={event => {}} value='favorite-publishers'>View list</Button>
                        </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>}
        <Flex justifyContent='center' alignItems='center' h='100vh'>
            {!isOpen && <IconButton icon={<ArrowLeftIcon/>} onClick={onOpen}/>}
            {isOpen && <IconButton icon={<ArrowRightIcon/>} onClick={onClose}/>}
        </Flex>
        </>
    )
}