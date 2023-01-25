import React, {useState, useEffect} from 'react';
import './ImageSlider.css';
import { AspectRatio, Image, Flex, HStack, IconButton, Button, Box} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { gameTrailersID } from '../../dumby-data/trendingGameTrailers';
import { searchRawgApiByParams } from '../../utils/apiCalls';


export const ImageSlider = () => {

    const images = [ 
        {image: "PwxIR4Qx6Fo"}, 
        {image: "NthGfn_ddRQ"},
        {image: "TYPmRWZYUus"}
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
  

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (imageIndex) => {
        setCurrentIndex(imageIndex)
    }

    const displayImageIndex = images.map((image, imageIndex) => {
        return (
            <Button key={image} h='30%' w='1%' rounded='lg' onClick={() => {goToSlide(imageIndex)}}></Button>
        )
    })


    //images[currentIndex].image
    return (
        <Flex h='40em' w='auto' flexDirection='column' alignItems='center' background='black'>
            <HStack h='90%' w='100%' justifyContent='center' alignItems='center'>
                <iframe height='100%' width="100%" src={`https://www.youtube.com/embed/${images[currentIndex].image}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen />
            </HStack>
            <HStack  h='10%' w='100%' bg='gray' justifyContent='center' alignItems='center'>
                <IconButton onClick={() => goToPrevious()} icon={<ArrowLeftIcon/>}/>
                    {displayImageIndex}
                <IconButton onClick={() => goToNext()} icon={<ArrowRightIcon/>}/>
            </HStack>
        </Flex>
    )
}