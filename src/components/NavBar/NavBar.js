import React from 'react';
import { Box, Flex, Hide, Show, Text, Icon, Button, IconButton, Kbd, Heading, Image} from '@chakra-ui/react';
// --- ICONS CHAKRA ---
import { MoonIcon, HamburgerIcon, Search2Icon} from '@chakra-ui/icons';
// --- ICON REACT ---
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { GiAstronautHelmet } from 'react-icons/gi'
import './NavBar.css';

export const NavBar = ({onOpen}) => {

    return (
        <Box maxW='100%' h='5em' background='grey' p='5'>
            <Flex alignItems='center' justifyContent='space-between' w='100%' h='100%'>
                <Box>
                    <Flex w='100%' alignItems='center'>
                        <Icon as={GiAstronautHelmet} w='6vh' h='6vh' mr='3'/>
                        <Hide below='767px'>
                            <Heading>O.D.D</Heading>
                        </Hide>
                    </Flex>
                </Box>
                <Hide below='479px'>
                    <Button w='md' leftIcon={<Search2Icon/>} onClick={() => {onOpen()}} display='flex' alignItems='center' m='4'>
                        <Flex w='100%' justifyContent='space-between'>
                            <Text>Search for Game</Text>
                            <Flex>
                                <span><Kbd>SHIFT</Kbd></span>
                                <span><Kbd>S</Kbd></span>
                            </Flex>
                        </Flex>
                    </Button>
                </Hide>
                    <Flex>
                        <Hide below='767px'>
                            <IconButton icon={<FaGithub/>} mr='2'/>
                            <IconButton icon={<FaLinkedinIn />} mr='2'/>
                            <IconButton icon={<MoonIcon />} mr='2'/>
                        </Hide>
                        <Show below='767px'>
                            <Image borderRadius='full' boxSize='10' src='https://bit.ly/dan-abramov' alt='Dan Abramov' mr='2'/>
                            <IconButton icon={<HamburgerIcon />} />
                        </Show>
                    </Flex>
            </Flex>
        </Box>
    )
}