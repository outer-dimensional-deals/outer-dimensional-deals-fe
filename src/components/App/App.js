import React, {useState, useEffect} from 'react';
import './App.css';
import { ChakraProvider, Flex, Box, Hide, Show, Text, useDisclosure } from '@chakra-ui/react';
import { useKey } from '../../hooks/useKey';
// --APICALL--
import { searchRawgApiByParams, listOfStores } from '../../utils/apiCalls';
// --- COMPONENTS ---
import { NavBar } from '../NavBar/NavBar';
import { GameCardContainer } from '../GameCardContainer/GameCardContainer';
import { Search } from '../Search/Search'
import { SideBar } from '../SideBar/SideBar';

//AND FUNCTION
const and = (a, b) => a && b

export const App = () => {

  //--CUSTOM HOOK--
  const shift = and(useKey('shift'), useKey('s'))
  const escape = useKey('escape')
  //--CHAKRA-HOOKS--
  const { isOpen, onOpen, onClose } = useDisclosure();
  //--REACT-HOOKS--
  const [ input, setInput ] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {

      if (shift) {
        onOpen()
      }

      if(escape) {
        onClose()
      }

  }, [shift, escape])


  const filterGamesByParameter = (parameter) => {
    console.log(parameter)
    searchRawgApiByParams(parameter)
    .then(results => {
      console.log(results)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    //Convert to slug
    let slug = "games?search=" + input.split(' ').join('-').toLowerCase() 
    //Search Title
    filterGamesByParameter(slug)
    onClose()
  }

  // --CHEAPSHARK--
  const storesApiCall = () => {
    listOfStores()
      .then(results => {
        console.log(results)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <ChakraProvider>
      <Flex flexDirection='column' background='blue.200'>
        <NavBar onOpen={onOpen} />
        <Search isOpen={isOpen} onClose={onClose} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Box h='100vh' w='100vw'>
          <Hide below='767px'>
            <Flex>
              <SideBar filterGamesByParameter={filterGamesByParameter} storesApiCall={storesApiCall}/>
              <GameCardContainer data={data}/>
            </Flex>
          </Hide>
          <Show below='767px'>
            <GameCardContainer />
          </Show>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
