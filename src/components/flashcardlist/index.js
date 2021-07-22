import React from 'react'
import Flashcard from '../flashcard'
import { FlashcardListWrapper } from './FlashcardListElements'

const FlashcardList = ({flashcards}) => {
    return (
        <FlashcardListWrapper>
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id}/>
            })}
        </FlashcardListWrapper>
    )
}

export default FlashcardList
