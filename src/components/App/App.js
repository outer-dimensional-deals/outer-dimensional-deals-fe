import React, {useState, useEffect} from 'react';
import './App.css';
import { ChakraProvider, Flex, Box, Hide, Show, Text, useDisclosure } from '@chakra-ui/react';
import { useKey } from '../../hooks/useKey';
// --APICALL--
import { findRecentlyReleasedGames, findAnticipatedGames } from '../../utils/apiCalls';
// --- COMPONENTS ---
import { NavBar } from '../NavBar/NavBar';
import { Search } from '../Search/Search'
import { SideBar } from '../SideBar/SideBar';
import { HomePage } from '../HomePage/HomePage';


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
  const [title, setTitle] = useState('New & Trending')

  useEffect(() => {

      if (shift) {
        onOpen()
      }

      if(escape) {
        onClose()
      }

  }, [shift, escape])

  useEffect(() => {


    findRecentlyReleasedGames()
      .then(results => {
        console.log(results)
       setData(results)
      })
      .catch(error => {
        console.log(error)
      })
      

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

  const handleAnticipated = () => {
    setTitle('Anticipated')
    findAnticipatedGames()
      .then(results => {
        setData(results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleNewAndTrending = () => {
    setTitle('New & Trending')
    findRecentlyReleasedGames()
      .then(results => {
        console.log(results)
      setData(results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <ChakraProvider>
      <Box maxH='100vh' maxW='100vw' overflow='hidden'>
        <Flex h='100%' w='100%'>
          <Show above='769px'>
            <SideBar handleAnticipated={handleAnticipated} handleNewAndTrending={handleNewAndTrending}/>
          </Show>
          <Flex flexDirection='column' h='100%' w='100%'>
            <NavBar onOpen={onOpen} />
            <Search isOpen={isOpen} onClose={onClose} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <HomePage data={data} title={title}/>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
