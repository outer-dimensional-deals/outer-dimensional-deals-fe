import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { ChakraProvider, Flex, Box, Hide, Show, Text, useDisclosure } from '@chakra-ui/react';
import { useKey } from '../../hooks/useKey';
// --APICALL--
import { searchIGDB } from '../../utils/apiCalls';
// --- COMPONENTS ---
import { NavBar } from '../NavBar/NavBar';
import { Search } from '../Search/Search'
import { SideBar } from '../SideBar/SideBar';
import { HomePage } from '../HomePage/HomePage';
import { results } from '../../dumby-data/dumby-data';


//AND FUNCTION
const and = (a, b) => a && b

export const App = () => {

  //--CUSTOM HOOK--
  const shift = and(useKey('shift'), useKey('s'))
  const escape = useKey('escape')
  //--CHAKRA-HOOKS--
  const { isOpen, onOpen, onClose } = useDisclosure();
  //--REACT-HOOKS--
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

      if (shift) {
        onOpen()
      }

      if(escape) {
        onClose()
      }

  }, [shift, escape])

  useEffect(() => {

    setData(results)
    if (data) {
      setTimeout(() => {
        setIsLoaded(true)
      }, 3000)
    }

  }, [])


  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    //Convert to slug
    let slug = "games?search=" + input.split(' ').join('-').toLowerCase() 
    //Search Title
    onClose()
  }

  // --CHEAPSHARK--


  return (
    <ChakraProvider>
      <Box maxH='100vh' maxW='100vw' overflow='hidden'>
        <Flex h='100%' w='100%'>
          <Show above='769px'>
            <SideBar />
          </Show>
          <Flex flexDirection='column' h='100%' w='100%'>
            <NavBar onOpen={onOpen} />
            <Search isOpen={isOpen} onClose={onClose} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <HomePage data={data} isLoaded={isLoaded} />
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
