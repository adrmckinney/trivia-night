import { useState } from 'react'
import Timer from './Timer'

function GameTracker ({ selectedCategory, selectedDifficulty, selectedRange, teams }) {
  const [isShown, setIsShown] = useState(false)

  function toggleTagDisplay () {
    setIsShown(!isShown)
  }

  function displayResult (event, idx) {
    console.log('display result', event.target.value, idx)
  }

  return (
    <div>
      <div>
        <div className='game-mode-tags f6 link br-pill ph3 pv2 mb2 dib white bg-mid-gray'>Category: {selectedCategory.name}</div>
        <div className='game-mode-tags f6 link br-pill ph3 pv2 mb2 dib white bg-mid-gray'>Difficulty: {selectedDifficulty}</div>
        <div className='game-mode-tags hide-tag f6 link br-pill ph3 pv2 mb2 dib white bg-mid-gray'>Number of Questions: {selectedRange}</div>
      </div>
      <div>
        <Timer />
      </div>
      <div className='team-score-container'>
        <div className='team-score-header'>
          <h4>Team</h4>
          <h4>Score</h4>
        </div>
        {teams.map((team, idx) => (
          <div className='team-score-output' key={`display-${team.name}-${idx}`}>
            <div>{team.name}</div>
            <div>{team.score}</div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default GameTracker
