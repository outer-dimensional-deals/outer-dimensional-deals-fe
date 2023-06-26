import React, { useState, useEffect } from 'react';
import './GameCard.css';
import { Box, Image, Text, Skeleton, Flex, AspectRatio, extendTheme, HStack, Tag, Icon} from '@chakra-ui/react';

import { assets } from '../../assets/assets';

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

  const theme = extendTheme({ breakpoints })

export const GameCard = ({isLoaded, id, name, background, genres, storyline, summary, ratings, released}) => {
const [genreName, setGenreName] = useState([])

useEffect(() => {

    if (genres) {
        setGenreName(genres)
    }


}, [])


const displayGenre = genreName.map(genre => {

    return (
        <Tag fontSize={7} key={genre.id} variant='solid' colorScheme='teal'>{genre.name}</Tag>
    )
})

const displayRelease = released.map(release => {
    return (
        release.human
    )
})


    return (
        <Box w={['12em']} h={['15.1em']} borderWidth='1px' rounded='md' boxShadow='dark-lg' position='relative' transition='500ms' _hover={{ boxShadow: 'outline', transform: 'scale(1.06)', zIndex: '1'}} m={1} bg='white'>
            <Skeleton isLoaded={isLoaded}>
                <Image boxSize={'15em'} ratio={3 / 4} objectFit='cover' src={background.replace('t_thumb', 't_cover_big')} alt={name} rounded='md'/>
            </Skeleton>
        </Box>
    )
}