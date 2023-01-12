import React from 'react';
import { Box, Text, Flex, Button, IconButton} from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import './SideBar.css';

export const SideBar = () => {

    return (
        <Box w='300px' h='100vh' background='green.100'>
            <Flex justifyContent='space-between' w='100%' h='100%'>
                <Box w='100%' h='100%'>
                    <Flex justifyContent='center'>
                        <Text>SideBar</Text>
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