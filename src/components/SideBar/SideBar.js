import React, { useState, useEffect } from 'react';
import './SideBar.css';
import { Box, Text, Flex, Button, Icon, Heading} from '@chakra-ui/react';
import { FaHouseUser, FaHeart, FaUserAstronaut } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';
import { GiAstronautHelmet } from 'react-icons/gi'

// --DUMBY DATA--

export const SideBar = ({storesApiCall, filterGamesByParameter}) => {


    return (
        <> 
        <Flex h='100vh' w='28em' bg='gray.900' className='SideBar' flexDirection='column' alignItems='center' boxShadow='dark-lg'>
            <Flex mt='5'>
                <Icon as={GiAstronautHelmet} w='6vh' h='6vh' mr='3'/>
                <Heading>O.D.D</Heading>
            </Flex>
            <Box h='11em' w='18em'  mt='5' bg='gray.700' rounded='md' p='3px' mr='5' ml='5' mb='10%'>
                <Flex h='100%' w='100%' bg='white' bgGradient='linear(to-t,gray.800,gray.700,gray.700,gray.600)' alignItems='center' justifyContent='center' boxShadow='dark-lg' rounded='md'  borderWidth='thin' borderColor='black'>
                    <Box h='9em' w='16em' background='gray.600' boxShadow='dark-lg' borderStyle='groove' borderLeftWidth='thin' borderTopWidth='thin' rounded='md'></Box>
                </Flex>
            </Box>
            <Flex h='20vh' w='100%' alignItems='center' justifyContent='space-around'>
                <Box w='6em' h='6em' bgGradient='linear(to-t,gray.600,gray.700,gray.800)' borderRadius='100%' pb='2px' pr='2px' pl='2px' pt='2px' ml='10px' boxShadow='inner'>
                    <Flex w='100%' h='100%' bg='gray.400' flexDirection='column' alignItems='center' justifyContent='center' borderRadius='100%' boxShadow='inner'>
                        <Box bg='gray.600' h='25%' w='25%' borderTopRadius='sm' borderTopWidth='thin' borderRightWidth='thin'></Box>
                        <Flex h='25%' w='75%'>
                            <Box bg='gray.800' h='99%' w='100%' rounded='sm'>
                                <Box bg='gray.600' h='86%' w='100%' borderTopLeftRadius='sm' borderLeftRadius='sm' borderTopWidth='thin'></Box>
                            </Box>
                            <Box bg='gray.600' h='100%' w='100%'></Box>
                            <Box bg='gray.800' h='100%' w='100%' rounded='sm'>
                                <Box bg='gray.600' h='86%' w='96%' borderTopRightRadius='sm' borderRightRadius='sm' borderTopWidth='thin' borderRightWidth='thin'></Box>
                            </Box>
                        </Flex>
                        <Box bg='gray.800' h='25%' w='25%' rounded='md'>
                            <Box bg='gray.600' h='86%' w='96%' borderBottomRadius='md' borderRightWidth='thin'></Box>
                        </Box>
                    </Flex>
                </Box>
                    <Flex h='8.5em' w='8.5em' justifyContent='space-evenly' alignItems='center' bg='gray.600' borderRadius='100%' flexDir='column' borderWidth='thin' borderColor='gray.700'>
                        <Flex bg='gray.400' rounded='full' h='25%' w='80%' justifyContent='space-between' align='center' borderWidth='thin' borderColor='gray.300'>
                            <Box h='2em' w='2em' ml='6px' bg='green.800' borderRadius='100%' pb='4px' pr='1px' pl='1px' >
                                <Box h='100%' w='100%' bg='green.500' borderRadius='100%' boxShadow='dark-lg' borderTopWidth='thin' align='center' p='1'><FaHouseUser/></Box>
                            </Box>
                            <Box h='2em' w='2em' mr='6px' bg='blue.800' borderRadius='100%' pb='4px' pr='1px' pl='1px' >
                                <Box h='100%' w='100%' bg='blue.500' borderRadius='100%' boxShadow='dark-lg' borderTopWidth='thin' align='center' p='1'><MdCategory/></Box>
                            </Box>    
                        </Flex>
                        <Flex bg='gray.400' rounded='full' h='25%' w='80%' justifyContent='space-between' align='center' borderWidth='thin' borderColor='gray.300'>
                            <Box h='2em' w='2em' ml='6px' bg='yellow.800' borderRadius='100%' pb='4px' pr='1px' pl='1px' >
                                <Box h='100%' w='100%' bg='yellow.500' borderRadius='100%' boxShadow='dark-lg' borderTopWidth='thin' align='center' p='1'><FaHeart/></Box>
                            </Box>
                            <Box h='2em' w='2em' mr='6px' bg='red.800' borderRadius='100%' pb='4px' pr='1px' pl='1px' >
                                <Box h='100%' w='100%' bg='red.500' borderRadius='100%' boxShadow='dark-lg' borderTopWidth='thin' align='center' p='1'><FaUserAstronaut /></Box>
                            </Box> 
                        </Flex>
                    </Flex>
            </Flex>
        </Flex>
        </>
    )
}