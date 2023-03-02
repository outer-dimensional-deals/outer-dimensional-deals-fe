import React, { useState, useEffect } from 'react';
import './Slider.css';
import { Flex, Button, IconButton} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'
import { GameCard } from '../GameCard/GameCard';

export const Slider = ({data, isLoaded}) => {
    const [array, setArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//       for (let i = 0; i < data.length; i+= 4) {
//           const chunk = data.slice(i, i + 4);
//           res.push(chunk)
//         }
//         return setArray(res)
//     }, [])


    
    console.log(data)

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

    // const mapData = data[currentIndex].map(data => {
    //     return (
    //         <Link to={`/:${data.name}`} state={{data: data}} key={data.id}>
    //             <GameCard
    //                 isLoaded={isLoaded}
    //                 id={data.id}
    //                 key={data.id} 
    //                 name={data.name} 
    //                 background={data.cover.url} 
    //                 genres={data.genres}
    //                 platforms={data.platforms}
    //                 ratings={data.aggregated_rating}
    //                 released={data.release_dates}
    //                 screenshots={data.screenshots}
    //             />
    //         </Link>
    //     )
    // })

    return (
        <Flex>
            <IconButton h='100%' onClick={() => goToPrevious()} icon={<ArrowLeftIcon/>}/>
                {/* {mapData} */}
            <IconButton h='100%' onClick={() => goToNext()} icon={<ArrowRightIcon/>}/>
        </Flex>
    )
}