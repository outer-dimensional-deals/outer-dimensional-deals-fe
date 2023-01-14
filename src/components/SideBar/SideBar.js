import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, Button, IconButton, Icon, HStack, VStack, Stack, Divider, Image, Collapse, useDisclosure, Tabs, Tab, TabList, TabPanels, TabPanel} from '@chakra-ui/react';
// --- CHAKRA ICONS ---
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
// --- REACT ICONS ---
import { IoGameController, IoPersonSharp } from 'react-icons/io5';

import { FaHashtag, 
    FaCode, 
    FaPaperPlane, 
    FaTheaterMasks, 
    FaBomb, 
    FaChessKing, 
    FaShieldAlt, 
    FaMagic, 
    FaPuzzlePiece, 
    FaBullseye, 
    FaCar, FaFootballBall } from 'react-icons/fa';

import { MdLocalGroceryStore } from 'react-icons/md'
import { GiRevolver } from 'react-icons/gi'
import './SideBar.css';

export const SideBar = () => {
    const { isOpen, onOpen, onClose,  onToggle} = useDisclosure();

    useEffect(() => {

        onOpen()

    }, [])


    return (
        <>
        {isOpen &&  
        <Box w='25em' h='100vh' background='green.100' className='SideBar'>
               <Tabs isFitted w='100%' h='100%' orientation='vertical' variant='enclosed'>
                 <TabList aria-orientation='vertical'>
                    <Tab>
                        <Image borderRadius='full' boxSize='10' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                    </Tab>
                    <Tab>
                        <Icon h='8' w='8' rounded='md' as={FaTheaterMasks} backgroundColor='gray.200' boxShadow='base'/>
                     </Tab>
                    <Tab>
                        <Icon h='8' w='8' rounded='md' as={MdLocalGroceryStore} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon h='8' w='8' rounded='md' as={FaHashtag} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon h='8' w='8' rounded='md' as={IoGameController} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon h='8' w='8' rounded='md' as={IoPersonSharp} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon h='8' w='8' rounded='md' as={FaCode} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                    <Tab>
                        <Icon h='8' w='8' rounded='md' as={FaPaperPlane} backgroundColor='gray.200' boxShadow='base'/>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' as='b'>USERNAME</Text>
                            <Text>USER EMAIL</Text>
                            <Text>FRIENDS</Text>
                            <Text>UPDATE USER INFO</Text>
                            <Text>USER FAVORITES</Text>
                        </Stack>
                    </TabPanel>
                    <TabPanel w='100%' h='100%'>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' as='b'>GENRES</Text>
                            <Button leftIcon={<FaBomb/>}>Action</Button>
                            <Button leftIcon={<FaChessKing/>}>Strategy</Button>
                            <Button leftIcon={<FaShieldAlt/>}>RPG</Button>
                            <Button leftIcon={<FaBullseye/>}>Shooter</Button>
                            <Button leftIcon={<FaMagic/>}>Adventure</Button>
                            <Button leftIcon={<FaPuzzlePiece/>}>Puzzle</Button>
                            <Button leftIcon={<FaCar/>}>Racing</Button>
                            <Button leftIcon={<FaFootballBall/>}>Sports</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' as='b'>STORES</Text>
                            <Button>STEAM</Button>
                            <Button>EPIC</Button>
                            <Button>GOG</Button>
                            <Button>GMG</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' as='b'>TAGS</Text>
                            <Button>Favorite Tag</Button>
                            <Button>Choose Favorite Tags</Button>
                            <Button>All Tags</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' as='b'>PLATFORMS</Text>
                            <Button>PC</Button>
                            <Button>Microsoft</Button>
                            <Button>Playstation</Button>
                            <Button>Nintendo</Button>
                            <Button>iOS</Button>
                            <Button>Android</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' as='b'>CREATORS</Text>
                            <Button>Your Favorite Creators</Button>
                            <Button>View list</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='md' as='b'>DEVELOPERS</Text>
                            <Button>Your Favorite Creators</Button>
                            <Button>View list</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel>
                        <Stack direction='column' spacing='24px'>
                            <Text fontSize='lg' as='b'>PUBLISHER</Text>
                            <Button>Your Favorite Creators</Button>
                            <Button>View list</Button>
                        </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>}
        <Flex justifyContent='center' alignItems='center' h='100vh'>
            {!isOpen && <IconButton icon={<ArrowRightIcon/>} onClick={onOpen}/>}
            {isOpen && <IconButton icon={<ArrowLeftIcon/>} onClick={onClose}/>}
        </Flex>
        </>
    )
}