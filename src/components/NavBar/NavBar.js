import React from 'react';
import { Box, Flex, Hide, Show, Text, Icon, Button, IconButton, Kbd, Heading, Image, extendTheme} from '@chakra-ui/react';
// --- ICONS CHAKRA ---
import { MoonIcon, HamburgerIcon, Search2Icon} from '@chakra-ui/icons';
// --- ICON REACT ---
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { GiAstronautHelmet } from 'react-icons/gi'
import './NavBar.css';

  

export const NavBar = ({onOpen}) => {

    return (
        <Box w='auto' h='5%' background='black' p='5'>
            <Flex alignItems='center' justifyContent={['space-between', 'space-between', 'center']} h='100%' w='100%' >
                <Show below='767px'>
                    <Icon as={GiAstronautHelmet} boxSize='10' mr='3'/>
                </Show>
                <Hide below='479px'>
                    <Button w='sm' leftIcon={<Search2Icon/>} onClick={() => {onOpen()}} display='flex' alignItems='center' m='4'>
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
                        <Show below='767px'>
                            <Image borderRadius='full' boxSize='10' src='https://bit.ly/dan-abramov' alt='Dan Abramov' mr='2'/>
                            <IconButton icon={<HamburgerIcon />} />
                        </Show>
                    </Flex>
            </Flex>
        </Box>
    )
}