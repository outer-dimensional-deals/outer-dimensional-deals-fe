import React, {useState, useEffect} from 'react';
import './ImageSlider.css';
import { AspectRatio, Image, Flex, HStack, IconButton, Button, Box, Skeleton} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';



export const ImageSlider = ({data}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);
    
    
    
    useEffect(() => {
        if (data) {
           return setImages(data.slice(0, 6).filter(element => element.videos).map(element => element.videos[0]))
        }
    }, [])


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
            <Button key={imageIndex} h='30%' w='1%' rounded='lg' onClick={() => {goToSlide(imageIndex)}}></Button>
        )
    })


    return (
        <Flex h={[ '20em', '30em']} w='auto' flexDirection='column' alignItems='center' background='black'>
            <HStack h='90%' w='100%' justifyContent='center' alignItems='center'>
                <iframe height='80%' width="80%" src={`https://www.youtube.com/embed/${images[currentIndex].video_id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
            </HStack>
            <HStack  h={['20%', '10%']} w='100%' bg='gray' justifyContent='center' alignItems='center'>
                <IconButton onClick={() => goToPrevious()} icon={<ArrowLeftIcon/>}/>
                    {!!images && displayImageIndex}
                <IconButton onClick={() => goToNext()} icon={<ArrowRightIcon/>}/>
            </HStack>
        </Flex>
    )
}