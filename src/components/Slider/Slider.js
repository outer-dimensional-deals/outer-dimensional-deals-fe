import React, { useState, useEffect } from 'react';
import './Slider.css';
import { Flex, Button, IconButton, Box, Container} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'
import { GameCard } from '../GameCard/GameCard';

//CSS TRANSITIONS FOR SLIDER --- create a hook that reads clientWindow sizes and updates the value below

export const Slider = ({data, isLoaded}) => {
    const [array, setArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let res = []; 
        if (data) {
            for (let i = 0; i < data.length; i += 2) {
                const chunk = data.slice(i, i + 2);
                res.push(chunk)
            }
            return setArray(res)
            }
        }, []
    )

    console.log("array", array)

    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? array.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === array.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const mapData = array[currentIndex]?.map(data => {
        return (
            <Link to={`/:${data.name}`} state={{data: data}} key={data.id}>
                <GameCard
                    isLoaded={isLoaded}
                    id={data.id}
                    key={data.id} 
                    name={data.name} 
                    background={data.cover.url} 
                    genres={data.genres}
                    platforms={data.platforms}
                    ratings={data.aggregated_rating}
                    released={data.release_dates}
                    screenshots={data.screenshots}
                />
            </Link>
        )
    })

    
    return (
        <Box className='Slider-Wrapper' h='40%' w='100%'>
            <Container className='Slider-Container' h='100%' maxW='100%' display='flex' justifyContent='center' alignItems='center'>
                <IconButton h='10em' onClick={() => goToPrevious()} icon={<ArrowLeftIcon/>}/>
                    {!!data && mapData}
                <IconButton h='10em' onClick={() => goToNext()} icon={<ArrowRightIcon/>}/>
            </Container>
        </Box>
    )
}