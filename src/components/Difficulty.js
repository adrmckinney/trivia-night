function Difficulty ({ difficulty, setSelectedDifficulty, handleBackToCategories, selectedCategory, setRange }) {
  return (
    <div>
      <div>
        <button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => { setSelectedDifficulty('easy'); setRange(true) }}>Easy</button>
        <button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => { setSelectedDifficulty('medium'); setRange(true) }}>Medium</button>
        <button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => { setSelectedDifficulty('hard'); setRange(true) }}>Hard</button>
        <button
          className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
          onClick={handleBackToCategories}
        >
          Go back to category list
        </button>
      </div>
    </div>
  )
}

export default Difficulty
