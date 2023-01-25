import React from 'react';
import './GameCard.css';
import { Box, Image, HStack, Text, Divider, Skeleton, Flex, extendTheme} from '@chakra-ui/react';

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

  const theme = extendTheme({ breakpoints })

export const GameCard = ({isLoaded, id, name, background, esrb, genres, metacritic, platforms, ratings, released, screenshots, tags}) => {

    return (
        <Box w={['15em', '30em', '28em', '40em', '60em']} h={['23em', '10em']} borderWidth='1px' rounded='md' boxShadow='dark-lg' _hover={{ boxShadow: 'outline'}} m={1} bg='white'>
            <Flex h='100%' w='100%' flexDirection={['column', 'row']}>
                <Skeleton isLoaded={isLoaded}>
                    <Image boxSize={['15em', '9.9em']} objectFit='cover' src={background} alt={name} rounded='md'/>
                </Skeleton>
                <Box p='3'>
                <Text fontSize='md'>{name}</Text>
                <Text>Tags</Text>
                <Text>Platforms</Text>
                <Text>User Review</Text>
                    {/* <Skeleton isLoaded={isLoaded}>
                        <Flex flexDirection='column'>
                            <Text fontSize='md'>{name}</Text>
                            <Text>Tags</Text>
                            <Text>Platforms</Text>
                            <Text>User Review</Text>
                        </Flex>
                    </Skeleton> */}
                </Box>
            </Flex>
        </Box>
    )
}