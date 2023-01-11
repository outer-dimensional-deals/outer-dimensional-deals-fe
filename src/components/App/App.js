import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';

// --- COMPONENTS ---
import { NavBar } from '../NavBar/NavBar';
import { GameCardContainer } from '../GameCardContainer/GameCardContainer';
import { SideBar } from '../SideBar/SideBar';
import './App.css';

export const App = () => {




  
  return (
    <ChakraProvider>
      <Flex flexDirection='column'>
        <NavBar />
        <GameCardContainer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
