import React from 'react'
import './Categories.css'
import { Flex, Container, HStack, SimpleGrid, Card, Tooltip, IconButton, Button, Text, Heading } from '@chakra-ui/react'

export const Categories = () => {
     
    return (
        <Flex h='100vh' w='100%' direction='column' align='center' mt='10'>
            <Heading>Categories</Heading>
            <Text>Displays Genre Categories of video games</Text>
            <Container>
                <SimpleGrid columns={4} spacing={10}>
                    <Tooltip label='Adventure'>
                        <Button>Adventure</Button>
                    </Tooltip>
                    <Tooltip label='Arcade'>
                        <Button>Arcade</Button>
                    </Tooltip>
                    <Tooltip label='Card & Board Game'>
                        <Button>Card  & Board Game</Button>
                    </Tooltip>
                    <Tooltip label='Fighting'>
                        <Button>Fighting</Button>
                    </Tooltip>
                    <Tooltip label='Hack and Slash'>
                        <Button>Hack and Slash</Button>
                    </Tooltip>
                    <Tooltip label='Indie'>
                        <Button>Indie</Button>
                    </Tooltip>
                    <Tooltip label='Moba'>
                        <Button>Moba</Button>
                    </Tooltip>
                    <Tooltip label='Music'>
                        <Button>Music</Button>
                    </Tooltip>
                    <Tooltip label='Pinball'>
                        <Button>Pinball</Button>
                    </Tooltip>
                    <Tooltip label='Platform'>
                        <Button>Platform</Button>
                    </Tooltip>
                    <Tooltip label='Puzzle'>
                        <Button>Puzzle</Button>
                    </Tooltip>
                    <Tooltip label='Point And Click'>
                        <Button>Point and Click</Button>
                    </Tooltip>
                    <Tooltip label='Quiz/Trivia'>
                        <Button>Quiz/Trivia</Button>
                    </Tooltip>
                    <Tooltip label='Racing'>
                        <Button>Racing</Button>
                    </Tooltip>
                    <Tooltip label='Real Time Strategy'>
                        <Button>Real Time Strategy</Button>
                    </Tooltip>
                    <Tooltip label='Role-Playing'>
                        <Button>Role-Playing</Button>
                    </Tooltip>
                    <Tooltip label='Shooter'>
                        <Button>Shooter</Button>
                    </Tooltip>
                    <Tooltip label='Simulation'>
                        <Button>Simulation</Button>
                    </Tooltip>
                    <Tooltip label='Sports'>
                        <Button>Sports</Button>
                    </Tooltip>
                    <Tooltip label='Strategy'>
                        <Button>Strategy</Button>
                    </Tooltip>
                    <Tooltip label='Tactical'>
                        <Button>Tactical</Button>
                    </Tooltip>
                    <Tooltip label='Turn-Based'>
                        <Button>Turn-Based</Button>
                    </Tooltip>
                    <Tooltip label='Visual Novel'>
                        <Button>Visual Novel</Button>
                    </Tooltip>
                </SimpleGrid>
            </Container>
        </Flex>
    )
}