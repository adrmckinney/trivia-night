import axios from 'axios'
import { useEffect, useState } from 'react'

function randomize (activeQuestionSet) {
  const correctAnswer = decodeURIComponent(activeQuestionSet.correct_answer)
  const incorrectAnswers = decodeURIComponent(activeQuestionSet.incorrect_answers).split(',')
  const allAnswers = incorrectAnswers.concat(correctAnswer)
  console.log('all answers before random', allAnswers)

  for (let i = allAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = allAnswers[i]
    allAnswers[i] = allAnswers[j]
    allAnswers[j] = temp
  }
  console.log('all answers after random', allAnswers)

  return allAnswers
}

function PlayGame ({ selectedCategory, selectedDifficulty, selectedRange, teams, setNavigation }) {
  const [questionSets, setQuestionSets] = useState([])
  const [questionSetPosition, setQuestionSetPosition] = useState(0)
  const [currentAnswers, setCurrentAnswers] = useState({})
  const [randomAnswers, setRandomAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [revealCorrectAnswer, setRevealCorrectAnswer] = useState([])

  console.log('teams from play game', teams)
  const activeQuestionSet = questionSets[questionSetPosition]

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=${selectedRange}&encode=url3986&category=${selectedCategory.id}&difficulty=${selectedDifficulty}`)

      .then(response => {
        const data = response.data.results
        setQuestionSets(data)
      })
  }, [])

  useEffect(() => {
    if (activeQuestionSet) {
      const newAnswers = randomize(activeQuestionSet)
      setRandomAnswers(newAnswers)

      const correctAnswer = decodeURIComponent(activeQuestionSet.correct_answer)
      setCorrectAnswer(correctAnswer)
    }
  }, [activeQuestionSet])

  if (questionSets.length === 0) {
    return 'loading'
  }

  function selectAnswerForTeam (teamName, answer) {
    console.log('select answer for team', teamName, answer)
    setCurrentAnswers({
      ...currentAnswers,
      [teamName]: answer
    })
  }

  // function showCorrectAnswer (activeQuestionSet) {
  //   const correctAnswer = decodeURIComponent(activeQuestionSet.correct_answer)
  //   setCorrectAnswer(correctAnswer)
  // }

  // debugger station
  console.log('active set', activeQuestionSet)
  console.log('correct answer state debugger', correctAnswer)
  console.log('reveal answer set to:', revealCorrectAnswer)
  console.log('random Answers in debugger', randomAnswers)

  function findCorrectAnswer () {
    console.log('RANDOM Answers in find function', randomAnswers)
    console.log('CORRECT Answer state in find function', correctAnswer)

    randomAnswers.forEach((answer) => {
      if (answer === correctAnswer) {
        console.log('LOOP of correct answer', answer)
        setRevealCorrectAnswer(answer)
      }
    })
  }
  // findCorrectAnswer()

  return (
    <div>
      <div className='screen-title-back-button-container'>
        <h3 className='f3 f2-m f1-l fw2 black-90 mv3'>Play Game</h3>
        <button
          className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
          onClick={() => setNavigation('home-screen')}
        >
          Restart Game
        </button>
      </div>
      <div className='page-content-container'>
        <div className='nav-submit-btns-container'>
          <div className='nav-btn-container'>
            <button disabled={questionSetPosition === 0} onClick={() => setQuestionSetPosition(questionSetPosition - 1)}>Previous Question</button>
            {/* <button disabled={questionSetPosition === questionSets.length - 1} onClick={() => setQuestionSetPosition(questionSetPosition + 1)}>Submit Answers</button> */}
            <button disabled={questionSetPosition === questionSets.length - 1} onClick={() => findCorrectAnswer()}>Submit Answers</button>

          </div>
          <input type='submit' value='Submit Answers' className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button submit-answers-btn' />
        </div>
        <div>
          <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4' key={activeQuestionSet.question}>
            <h1 className='f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>{decodeURIComponent(activeQuestionSet.question)}
            </h1>
            <div className='answers-radio-container'>
              <div className='answer-container pa3 bt b--black-10'>
                {randomAnswers.map((answer) => (
                  <p
                    key={answer}
                    className={`revealCorrectAnswer ${revealCorrectAnswer ? 'reveal-correct-answer each-answer f6 f5-ns lh-copy measure' : 'each-answer f6 f5-ns lh-copy measure'}`}
                  >
                    {answer}
                  </p>
                ))}
              </div>
              {teams.map((team) => (
                <div className='team-card' key={`answer-team_${team.name}`}>
                  <h3 className='team-name'>{team.name}</h3>
                  <form>
                    {randomAnswers.map((answer) => (
                      <div key={`radio-${answer}-${team.name}`}>
                        <input
                          type='radio'
                          className='checkboxes'
                          checked={currentAnswers[team.name] === answer}
                          onChange={() => selectAnswerForTeam(team.name, answer)}
                        />
                      </div>
                    ))}
                  </form>
                </div>
              ))}

            </div>
          </article>
        </div>

      </div>
    </div>
  )
}

export default PlayGame
