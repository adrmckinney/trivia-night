import { useState } from 'react'
import Timer from './Timer'

function GameTracker ({ selectedCategory, selectedDifficulty, selectedRange, teams, navigation }) {
  const [isShown, setIsShown] = useState(false)

  function toggleTagDisplay () {
    setIsShown(!isShown)
  }

  function displayResult (event, idx) {
    // console.log('display result', event.target.value, idx)
  }

  return (
    <div>
      <div>
        {selectedCategory && (
          <div className='animate__animated animate__fadeInUpBig game-mode-tags f6 link br-pill ph3 pv2 mb2 dib white bg-mid-gray'>Category: {selectedCategory.name}</div>
        )}
        {selectedCategory && selectedDifficulty && (
          <div className='animate__animated animate__fadeInUpBig game-mode-tags f6 link br-pill ph3 pv2 mb2 dib white bg-mid-gray'>Difficulty: {selectedDifficulty}</div>
        )}
        {selectedCategory && selectedDifficulty && selectedRange && navigation === 'playing-game' && (
          <div className='animate__animated animate__fadeInUpBig game-mode-tags hide-tag f6 link br-pill ph3 pv2 mb2 dib white bg-mid-gray'>Number of Questions: {selectedRange}</div>
        )}
      </div>
      {navigation === 'playing-game' && (
        <div>
          <div>
            <Timer />
          </div>
          <div className='team-score-container'>
            <div className='team-score-header'>
              <h4 className='team-header'>Team</h4>
              <h4 className='score-header'>Score</h4>
            </div>
            {teams.map((team, idx) => (
              <div className='team-score-output' key={`display-${team.name}-${idx}`}>
                <div className='tracker-team-name'>{team.name}</div>
                <div className='tracker-team-score'>{team.score}</div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  )
}

export default GameTracker
