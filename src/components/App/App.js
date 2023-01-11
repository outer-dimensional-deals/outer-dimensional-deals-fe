import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

// --- COMPONENTS ---
import { NavBar } from '../NavBar/NavBar';
import { GameCardContainer } from '../GameCardContainer/GameCardContainer';
import './App.css';

export const App = () => {




  
  return (
    <ChakraProvider>
    <div className="App">
      <NavBar />
      <GameCardContainer />
    </div>
    </ChakraProvider>
  );
}

export default App;
