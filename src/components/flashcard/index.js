import React, {useState} from 'react'
import { FlashcardBack, FlashcardContainer, FlashcardFront, FlashcardOption, FlashcardOptions, FlashcardQuestion, } from './FlashcardElements'

const Flashcard = ({flashcard}) => {
    const [flip, setFlip] = useState(false)


    return (
        <FlashcardContainer onClick={() => setFlip(!flip)} flip={flip}>
            <FlashcardFront>
                <FlashcardQuestion>{flashcard.question}</FlashcardQuestion>
                <FlashcardOptions>
                    {flashcard.options.map(option => {
                    return <FlashcardOption>{option}</FlashcardOption>
                })}
                </FlashcardOptions>
            </FlashcardFront>
            <FlashcardBack>{flashcard.answer}</FlashcardBack>
        </FlashcardContainer>
    )
}

export default Flashcard
