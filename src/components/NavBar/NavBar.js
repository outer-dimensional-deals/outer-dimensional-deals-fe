import React from 'react';
import './NavBar.css';
import { Box, Flex, Hide, Show, Text, Icon, Button, IconButton, Kbd, Heading, Image, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
// --ROUTER--
import { Link } from 'react-router-dom';
// --ICONS CHAKRA--
import { MoonIcon, HamburgerIcon, Search2Icon} from '@chakra-ui/icons';
// --ICON REACT--
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { GiAstronautHelmet } from 'react-icons/gi'

  

export const NavBar = ({onOpen}) => {

    return (
        <Box w='auto' h='5%' bg='gray.900' p='5'>
            <Flex alignItems='center' justifyContent={['space-between', 'space-between', 'center']} h='100%' w='100%' >
                <Hide above='769px'>
                    <Icon as={GiAstronautHelmet} boxSize='10' mr='3' color='blue.600'/>
                </Hide>
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
                        <Hide above='769px'>
                            <Menu>
                                <MenuButton as={Button} colorScheme='blue'>
                                    <Icon as={HamburgerIcon} color='black'/>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>
                                        <Link to={'/'}>
                                            Home
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={() => {onOpen()}}>Search</MenuItem>
                                    <MenuItem>
                                        <Link to={'/Categories'}>
                                            Categories
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to={'/Favorites'}>
                                            Favorites
                                        </Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Hide>
                    </Flex>
            </Flex>
        </Box>
    )
}