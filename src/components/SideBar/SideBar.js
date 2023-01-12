import React from 'react';
import { Box, Heading, Text, Flex, Button, IconButton, Icon, HStack, VStack, Stack, Divider, Image} from '@chakra-ui/react';
// --- CHAKRA ICONS ---
import { ArrowRightIcon, ArrowLeftIcon, ChevronDownIcon } from '@chakra-ui/icons';
// --- REACT ICONS ---
import { IoGameController, IoPersonSharp } from 'react-icons/io5';
import { FaHashtag, FaCode, FaPaperPlane, FaTheaterMasks } from 'react-icons/fa';
import { MdLocalGroceryStore } from 'react-icons/md'
import './SideBar.css';

export const SideBar = () => {

    return (
        <Box w='300px' h='100vh' background='green.100' overflow='scroll'>
            <Flex justifyContent='space-between' w='100%' h='100%'>
                <Box w='100%' h='100%'>
                    <Flex flexDirection='column' alignItems='center' w='100%' h='100%'>
                        <Box w='100%' h='100%'>
                            <Stack direction='column' w='100%' spacing='5' ml='5' mt='5'>
                                <HStack>
                                    <Image borderRadius='full' boxSize='10' src='https://bit.ly/dan-abramov' alt='Dan Abramov' mr='2'/>
                                    <Text>USERNAME</Text>
                                </HStack>
                                <Heading>Browse</Heading>
                                <HStack>
                                    <Icon h='8' w='8' rounded='md' as={FaTheaterMasks} backgroundColor='gray.200' boxShadow='base'/>
                                    <Text fontSize='lg' as='b'>Genres</Text>
                                </HStack>
                                <HStack>
                                    <Icon h='8' w='8' rounded='md' as={MdLocalGroceryStore} backgroundColor='gray.200' boxShadow='base'/>
                                    <Text fontSize='lg' as='b'>Stores</Text>
                                </HStack>
                                <HStack>
                                    <Icon h='8' w='8' rounded='md' as={FaHashtag} backgroundColor='gray.200' boxShadow='base'/>
                                    <Text fontSize='lg' as='b'>Tags</Text>
                                </HStack>
                                <HStack>
                                    <Icon h='8' w='8' rounded='md' as={IoGameController} backgroundColor='gray.200' boxShadow='base'/>
                                    <Text fontSize='lg' as='b'>Platforms</Text>
                                </HStack>
                                 <HStack>
                                    <Icon h='8' w='8' rounded='md' as={IoPersonSharp} backgroundColor='gray.200' boxShadow='base'/>
                                    <Text fontSize='lg' as='b'>Creators</Text>
                                </HStack>
                                <HStack>
                                    <Icon h='8' w='8' rounded='md' as={FaCode} backgroundColor='gray.200' boxShadow='base'/>
                                    <Text fontSize='lg' as='b'>Developers</Text>
                                 </HStack>
                                 <HStack>
                                    <Icon h='8' w='8' rounded='md' as={FaPaperPlane} backgroundColor='gray.200' boxShadow='base'/>
                                    <Text fontSize='lg' as='b'>Publishers</Text>
                                </HStack>
                            </Stack>
                        </Box>
                    </Flex>
                </Box>
                <Flex justifyContent='center' alignItems='center' h='100vh'>
                {/* <IconButton icon={<ArrowRightIcon/>}/> */}
                    <IconButton icon={<ArrowLeftIcon/>} />
                </Flex>
            </Flex>
        </Box>
    )
}