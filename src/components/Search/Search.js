import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    InputGroup,
    InputLeftElement, 
    Switch,
    InputRightElement,
    Kbd,
    FormControl,
    FormLabel
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import './Search.css';

export const Search = ({isOpen, onClose, handleChange, handleSubmit}) => {

    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose} size='lg'>
            <ModalOverlay />
            <ModalContent>
                <InputGroup size='lg'>
                    <InputLeftElement children={<SearchIcon />}/>
                    <Input placeholder='Search for game title' onChange={event => handleChange(event)} onKeyPress={event => {if (event.key === 'Enter') handleSubmit()}} />
                    <InputRightElement children={<Kbd>ENTER</Kbd>} w='15%'/>
                </InputGroup>
            </ModalContent>
        </Modal>
        </>
    )
}