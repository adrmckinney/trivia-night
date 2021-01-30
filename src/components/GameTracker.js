import { useState } from 'react'
import Timer from './Timer'

function GameTracker ({ selectedCategory, selectedDifficulty, selectedRange }) {
  const [isShown, setIsShown] = useState(false)

  function toggleTagDisplay () {
    setIsShown(!isShown)
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
    </div>
  )
}

export default GameTracker
