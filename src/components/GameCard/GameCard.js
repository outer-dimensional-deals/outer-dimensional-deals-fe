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

export const GameCard = ({isLoaded, id, name, background, genres, platforms, ratings, released}) => {
const [logo, setLogo] = useState([])
const [genreName, setGenreName] = useState([])

useEffect(() => {

    if (genres) {
        setGenreName(genres)
    }
    if (platforms) {
        setLogo(platforms)
    }

}, [])

const mapPlats = logo.map(platform => platform.name)

const filterIcons = assets.filter(asset => mapPlats.includes(asset.name))


const mapIcons = filterIcons.map(icon => {
    return (
        <Icon as={icon.img} key={icon.name}/>
    )
})

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
        <Box w={['10em']} h={['auto']} borderWidth='1px' rounded='md' boxShadow='dark-lg' position='relative' transition='500ms' _hover={{ boxShadow: 'outline', transform: 'scale(1.5)', zIndex: '1'}} m={1} bg='white'>
            <Flex h='100%' w='100%' flexDirection={['column']}>
                <Skeleton isLoaded={isLoaded}>
                    <Image boxSize={'100%'} ratio={3 / 4} objectFit='cover' src={background.replace('t_thumb', 't_cover_big')} alt={name} rounded='md'/>
                </Skeleton>
                {/* <Flex p='3' flexDirection='column' justifyContent='space-between' w='90%'>
                    <Text fontSize='md'>{name}</Text>
                    <HStack>
                        {displayGenre}
                    </HStack>
                    <HStack>
                        {mapIcons}
                    </HStack>
                </Flex> */}
            </Flex>
        </Box>
    )
}