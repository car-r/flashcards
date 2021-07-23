import React, {useState, useEffect, useRef} from 'react'
import './App.css';
import FlashcardList from './components/flashcardlist';
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then(res => {
      setCategories(res.data.trivia_categories)
    })
  }, [])

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

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div>
            <label htmlFor="amount">Number of Questions</label>
            <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl}/>
        </div>
      </form>
      <div className="AppContainer">
        <FlashcardList flashcards={flashcards}/>
      </div>
    </>
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
