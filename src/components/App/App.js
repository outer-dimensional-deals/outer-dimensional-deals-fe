import React, {useState, useEffect} from 'react';
import './App.css';
import { ChakraProvider, Flex, Box, Hide, Show, Text, useDisclosure } from '@chakra-ui/react';
import { useKey } from '../../hooks/useKey';
// --APICALL--
import { findRecentlyReleasedSample, findAnticipatedSample } from '../../utils/apiCalls';
// --- COMPONENTS ---
import { NavBar } from '../NavBar/NavBar';
import { Search } from '../Search/Search'
import { SideBar } from '../SideBar/SideBar';
import { HomePage } from '../HomePage/HomePage';
import { Favorites } from '../Favorites/Favorites';
import { Categories } from '../Categories/Categories';
import { Profile } from '../Profile/Profile';
//---- ROUTER ----
import {Routes, Route} from 'react-router-dom'
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
  const [trending, setTrending] = useState([]);
  const [anticipated, setAnticipated] = useState([]);
  const trendy = [];
  const anty = [];

  //--LOCATION--
  const [location, setLocation] = useState({name: 'Home'})

  useEffect(() => {

      if (shift) {
        onOpen()
      }

      if(escape) {
        onClose()
      }

  }, [shift, escape])

  useEffect(() => {


    findRecentlyReleasedSample()
      .then(results => {
        console.log(results)
       setTrending(results)
      })
      .catch(error => {
        console.log(error)
      })
      
    findAnticipatedSample() 
      .then(results => {
        console.log(results)
      setAnticipated(results)
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


  const buttonLinks = [
    {
      name: 'Home', 
    },
    {
      name: 'Categories',
    },
    {
      name: 'Favorites',
    },
    {
      name: 'Profile',
    }
  ]

  const setNavigation = (name) => {
   let currentLink = buttonLinks.find(element => element.name === name)

    setLocation(currentLink)
  }

  return (
    <ChakraProvider>
      <Box maxH='100vh' maxW='100vw' overflow='hidden'>
        <Flex h='100%' w='100%'>
          <Show above='769px'>
            <SideBar  setNavigation={setNavigation} location={location}/>
          </Show>
          <Flex flexDirection='column' h='100%' w='100%'>
            <NavBar onOpen={onOpen} />
            <Search isOpen={isOpen} onClose={onClose} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Routes>
              <Route exact path='/' element={<HomePage trending={trending} anticipated={anticipated} />} />
              <Route exact path='/Categories' element={<Categories />} />
              <Route exact path='/Favorites' element={<Favorites />} />
              <Route exact path='/Profile' element={<Profile />}/>
            </Routes>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
