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
    InputLeftElement
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import './Search.css';

export const Search = ({isOpen, onClose, handleChange, handleSubmit}) => {

    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose} size='sm'>
            <ModalOverlay />
            <ModalContent>
                <InputGroup>
                    <InputLeftElement children={<SearchIcon />}/>
                    <Input placeholder='Search for game' onChange={event => handleChange(event)} onKeyPress={event => {if (event.key === 'Enter') handleSubmit()}} />
                </InputGroup>
            </ModalContent>
        </Modal>
        </>
    )
}