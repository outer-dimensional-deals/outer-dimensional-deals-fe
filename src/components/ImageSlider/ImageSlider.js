import React, {useState, useEffect} from 'react';
import './ImageSlider.css';
import { Box, Image, Flex, HStack, IconButton, Button} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { gameTrailersID } from '../../dumby-data/trendingGameTrailers';
import { searchRawgApiByParams } from '../../utils/apiCalls';


export const ImageSlider = () => {

//     const [currentIndex, setCurrentIndex] = useState(0)
  

//     const goToPrevious = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex)
//     }

//     const goToNext = () => {
//         const isLastSlide = currentIndex === images.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex)
//     }

//     const listOfImages = images.map((image, index)=> {
//         return (
//             <Image key={index} boxSize='4em' src={image.image} boxShadow={index === currentIndex ? 'outline' : 'base'} borderRadius='lg' borderWidth='1px'/>
//         )
//     })

    const searchGameTrailers = () => {
        searchRawgApiByParams('games/536891/movies?')
        .then(results => {
          console.log(results)
        })
        .catch(error => {
          console.log(error)
        })
    }

    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center' background='black'>
        <Box>
            <Button onClick={() => {searchGameTrailers()}}>SEARCH TRAILERS</Button>
        </Box>
        {/* <HStack>
            <IconButton onClick={() => goToPrevious()} icon={<ArrowLeftIcon/>}/>
            <Image boxSize='md' w='40em' objectFit='cover' src={images[currentIndex].image} />
            <IconButton onClick={() => goToNext()} icon={<ArrowRightIcon/>}/>
        </HStack>
        <Box background='blue' w='100%'>
        </Box> */}
        </Flex>
    )
}