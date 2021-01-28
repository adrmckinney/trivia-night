import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import useToggle from '../functions/useToggle'

function PlayGame ({ selectedCategory, selectedDifficulty, selectedRange, handleToQuit }) {
  const [questions, setQuestions] = useState([])
  // const [showAnswers, setShowAnswers] = useState(false)
  const [isOn, toggleIsOn] = useToggle()

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=${selectedRange}&encode=url3986&category=${selectedCategory.id}&difficulty=${selectedDifficulty}`)

      .then(response => {
        const data = response.data.results
        setQuestions(data)
      })
  }, [])

  return (
    <div>
      <h2>Play Game</h2>

      <button
        className='go-to-categories-button'
        onClick={handleToQuit}
      >
        Quit Game
      </button>
      <div>
        {questions.map((question) => (
          <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4' key={question.question}>
            <h1 className='f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{decodeURIComponent(question.question)}
              <button onClick={toggleIsOn}>
                {isOn ? 'Hide Answers' : 'Show Answers'}
              </button>
            </h1>
            {isOn && (
              <div className='pa3 bt b--black-10'>
                <p className='f6 f5-ns lh-copy measure'>
                  Correct Answer: {decodeURIComponent(question.correct_answer)}
                </p>
                <p className='f6 f5-ns lh-copy measure'>
                  Wrong Answer(s): {decodeURIComponent(question.incorrect_answers)}
                </p>
              </div>
            )}

          </article>
        ))}
      </div>
    </div>
  )
}

export default PlayGame
