import { ChakraProvider, Flex, Box, Hide, Show, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

// --- COMPONENTS ---
import { NavBar } from '../NavBar/NavBar';
import { GameCardContainer } from '../GameCardContainer/GameCardContainer';
import { Search } from '../Search/Search'
import { SideBar } from '../SideBar/SideBar';
import './App.css';

export const App = () => {


  //--CHAKRA-HOOKS--
  const { isOpen, onOpen, onClose } = useDisclosure();



  
  return (
    <ChakraProvider>
      <Flex flexDirection='column'>
        <Box>
          <Text>Banner</Text>
        </Box>
        <NavBar onOpen={onOpen}/>
        <Search isOpen={isOpen} onClose={onClose}/>
        <Box h='100vh' w='100vw'>
          <Hide below='767px'>
            <Flex>
              <SideBar/>
              <GameCardContainer />
            </Flex>
          </Hide>
          <Show below='767px'>
            <GameCardContainer/>
          </Show>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
