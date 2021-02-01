import axios from 'axios'
import { useEffect, useState } from 'react'

function randomize (activeQuestionSet) {
  const correctAnswer = decodeURIComponent(activeQuestionSet.correct_answer)
  const incorrectAnswers = decodeURIComponent(activeQuestionSet.incorrect_answers).split(',')
  const allAnswers = incorrectAnswers.concat(correctAnswer)
  // console.log('all answers before random', allAnswers)

  for (let i = allAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = allAnswers[i]
    allAnswers[i] = allAnswers[j]
    allAnswers[j] = temp
  }
  // console.log('all answers after random', allAnswers)

  return allAnswers
}

function updateScores (teams, setTeams, correctAnswer, currentAnswers) {
  const newTeams = [
    ...teams
  ]

  for (const teamName of Object.keys(currentAnswers)) {
    const teamAnswer = currentAnswers[teamName]
    const idx = teams.findIndex((team) => team.name === teamName)
    console.log('index of team', teamName, idx, teamAnswer, correctAnswer)
    if (idx > -1 && teamAnswer === correctAnswer) {
      newTeams[idx] = {
        ...newTeams[idx],
        score: newTeams[idx].score + 1
      }
    }
  }
  setTeams(newTeams)
}

function PlayGame ({ selectedCategory, selectedDifficulty, selectedRange, teams, setTeams, setNavigation, setIsActive, setSelectedCategory, setSelectedRange, setSelectedDifficulty }) {
  const [questionSets, setQuestionSets] = useState([])
  const [questionSetPosition, setQuestionSetPosition] = useState(0)
  const [currentAnswers, setCurrentAnswers] = useState({})
  const [randomAnswers, setRandomAnswers] = useState([])
  const [answerSubmitted, setAnswerSubmitted] = useState(false)

  // console.log('teams from play game', teams)
  const activeQuestionSet = questionSets[questionSetPosition]

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=${selectedRange}&encode=url3986&category=${selectedCategory.id}&difficulty=${selectedDifficulty}`)

      .then(response => {
        const data = response.data.results
        setQuestionSets(data)
      })
  }, [selectedCategory, selectedDifficulty, selectedRange])

  useEffect(() => {
    if (activeQuestionSet) {
      const newAnswers = randomize(activeQuestionSet)
      setRandomAnswers(newAnswers)
    }
  }, [activeQuestionSet])

  if (questionSets.length === 0) {
    return 'loading'
  }

  const correctAnswer = decodeURIComponent(activeQuestionSet.correct_answer)

  function selectAnswerForTeam (teamName, answer) {
    // console.log('select answer for team', teamName, answer)
    setCurrentAnswers({
      ...currentAnswers,
      [teamName]: answer
    })
  }

  // debugger station
  console.log('correct Answer', correctAnswer)
  // console.log('correct answer state debugger', correctAnswer)
  // console.log('correct answer state debugger', activeQuestionSet)
  // console.log('reveal answer set to:', )
  // console.log('random Answers in debugger', randomAnswers)

  return (
    <div>
      <div className='screen-title-back-button-container'>
        <h3 className='f3 f2-m f1-l fw2 black-90 mv3'>Play Game</h3>
        <button
          className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
          onClick={() => { setSelectedCategory(null); setSelectedRange(1); setSelectedDifficulty(null); setTeams = ([]); setNavigation('home-screen') }}
        >
          Restart Game
        </button>
        <button
          className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
          onClick={() => setNavigation('end-of-game')}
        >
          End Game
        </button>
      </div>
      <div className='page-content-container'>
        <div className='nav-submit-btns-container'>
          <div className='nav-btn-container'>
            <button disabled={questionSetPosition === 0} className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button' onClick={() => setQuestionSetPosition(questionSetPosition - 1)}>Previous Question</button>
            <button disabled={answerSubmitted} className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button' onClick={() => { updateScores(teams, setTeams, correctAnswer, currentAnswers); setAnswerSubmitted(true) }}>Submit Answers</button>
            <button disabled={questionSetPosition === questionSets.length - 1} className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button' onClick={() => { setQuestionSetPosition(questionSetPosition + 1); setCurrentAnswers({}); setAnswerSubmitted(false) }}>Next Question</button>
          </div>
        </div>
        <div>
          <article className='main-game-card center mw5 mw6-ns br3 hidden ba b--black-10 mv4' key={activeQuestionSet.question}>
            <h1 className='f4 bg-near-white br3 br--top light-purple-60 mv0 pv2 ph3'>{decodeURIComponent(activeQuestionSet.question)}
            </h1>
            <div className='answers-radio-container'>
              <div className='answer-container pa3 bt b--black-10'>
                {randomAnswers.map((answer) => (
                  <p
                    key={answer}
                    className={`${answerSubmitted && answer === correctAnswer ? 'reveal-correct-answer each-answer f6 f5-ns lh-copy measure' : 'each-answer f6 f5-ns lh-copy measure'}`}
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
