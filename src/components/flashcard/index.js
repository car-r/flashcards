import React, {useState, useEffect, useRef} from 'react'
import { FlashcardBack, FlashcardContainer, FlashcardFront, FlashcardOption, FlashcardOptions, FlashcardQuestion, } from './FlashcardElements'

const Flashcard = ({flashcard}) => {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()
    const questionEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.clientHeight + questionEl.current.clientHeight + 45
        const backHeight = backEl.current.clientHeight
        

        setHeight(Math.max(frontHeight, backHeight, 150))
        
    }
    console.log(height)

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])

    return (
        <FlashcardContainer onClick={() => setFlip(!flip)} flip={flip} height={height} >
            <FlashcardFront >
                <FlashcardQuestion ref={questionEl}>{flashcard.question}</FlashcardQuestion>
                <FlashcardOptions ref={frontEl}>
                    {flashcard.options.map(option => {
                    return <FlashcardOption>{option}</FlashcardOption>
                })}
                </FlashcardOptions>
            </FlashcardFront>
            <FlashcardBack ref={backEl}>{flashcard.answer}</FlashcardBack>
        </FlashcardContainer>
    )
}

export default Flashcard
