import axios from 'axios'
import { useEffect, useState } from 'react'

function Range ({ setGame, selectedRange, setSelectedRange, selectedCategory, selectedDifficulty, handleBackToDifficulty }) {
  const [possibleCount, setPossibleCount] = useState(0)
  const [numOfQuestions, setNumOfQuestions] = useState(0)

  useEffect(() => {
    axios.get(`https://opentdb.com/api_count.php?category=${selectedCategory.id}`)
      .then(response => {
        console.log('count', response.data.category_question_count)
        const data = response.data.category_question_count

        let searchDifficulty = ''

        if (selectedDifficulty === 'easy') {
          searchDifficulty = 'total_easy_question_count'
        } else if (selectedDifficulty === 'medium') {
          searchDifficulty = 'total_medium_question_count'
        } else {
          searchDifficulty = 'total_hard_question_count'
        }
        console.log('data', data)
        console.log('search difficulty', searchDifficulty)
        console.log('data + hard level', data.total_hard_question_count)
        console.log('data + search', data[searchDifficulty])

        const possibleTotalCount = []
        const totalCount = data[searchDifficulty]
        if (totalCount > 50) {
          possibleTotalCount.push(50)
        } else {
          possibleTotalCount.push(totalCount)
        }
        setPossibleCount(possibleTotalCount)
      })
  }, [])

  function DisplayPossibleNumberOfQuestions () {
    const numArray = []
    for (let num = 1; num <= possibleCount; num++) {
      numArray.push(<option key={num} value={num}>{num}</option>)
    }
    console.log('numofqs', numOfQuestions)
    console.log('numArray:', numArray)

    return numArray
  }

  //   console.log('value state', { selectedRange })

  return (
    <div>
      <div>
        <div>How many questions would you like?</div>
        <select value={selectedRange} onChange={(event) => setSelectedRange(event.currentTarget.value)}>
          <DisplayPossibleNumberOfQuestions />

        </select>
      </div>
      <div>
        <button onClick={() => setGame(true)}>Play Game</button>
        <button
          className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
          onClick={handleBackToDifficulty}
        >
          Go back to difficulty
        </button>
      </div>
    </div>

  )
}

export default Range
