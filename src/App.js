import React, {useState, useEffect} from 'react'
import './App.css';
import FlashcardList from './components/flashcardlist';
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  useEffect(() => {
    const fetchQuestions = async () => {
      const result = await axios('https://opentdb.com/api.php?amount=10')
  
      setFlashcards(result.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)), 
          answer
        ]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - 0.5)
        }
      }))
    }
    fetchQuestions()
  }, [])

  // decode HTML and convert to string
  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <div className="App">
      <FlashcardList flashcards={flashcards}/>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'what is 2 + 2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'what is 10 + 10?',
    answer: '20',
    options: [
      '20',
      '33',
      '40',
      '15'
    ]
  },
  {
    id: 3,
    question: 'what is 20 + 20?',
    answer: '40',
    options: [
      '20',
      '30',
      '40',
      '50'
    ]
  }
]

export default App;
