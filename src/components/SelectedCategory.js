import axios from 'axios'
import { useEffect, useState } from 'react'

function SelectedCategory ({ category, handleBackToCategories }) {
  const [questions, setQuestions] = useState([])
  //   console.log('category: ', category)
  console.log(`https://opentdb.com/api.php?amount=10&category=${category.id}&difficulty=easy`)

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&encode=url3986&category=${category.id}&difficulty=easy`)

      .then(response => {
        const data = response.data.results
        setQuestions(data)
      })
  }, [])

  return (
    <div>
      <h2>Selected Category page</h2>

      <button
        className='go-to-categories-button'
        onClick={handleBackToCategories}
      >
        Go back to list
      </button>
      <div>
        {questions.map((question) => (
          <div key={question.question}>{decodeURIComponent(question.question)} </div>
        ))}
      </div>
    </div>
  )
}

export default SelectedCategory
