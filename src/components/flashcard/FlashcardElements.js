import styled from "styled-components";

export const FlashcardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 0.25rem;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: transparent;
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    height: 250px;
    width: 250px;
    perspective: 1000px;
    cursor: pointer;
    transform: ${props => props.flip ? 'rotateY(180deg)' : 'rotateY(0)'};

    &:hover {
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6);
    }
`

export const FlashcardFront = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 1em;
    backface-visibility: hidden;
    background-color: #fff;
    height: 100%;
    left: 0;
`

export const FlashcardQuestion = styled.div`
    margin-bottom: 1em;
`

export const FlashcardOptions = styled.div`

`

export const FlashcardOption = styled.p`
    margin-bottom: 0.5em;
    color: #555;
    font-size: 0.9rem;
`

export const FlashcardBack = styled.div`
    display: flex;
    position: absolute;
    padding: 1em;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: #fff;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`