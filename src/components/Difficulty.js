function Difficulty ({ difficulty, setSelectedDifficulty, handleBackToCategories, selectedCategory, setRange, setNavigation }) {
  return (
    <div>
      <div className='screen-title-back-button-container'>
        <h3 className='f3 f2-m f1-l fw2 black-90 mv3'>Select a Difficulty Level</h3>
        <button
          className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
          onClick={() => setNavigation('selecting-category')}
        >
          Go back to category list
        </button>
      </div>
      <div>
        <button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => { setSelectedDifficulty('easy'); setNavigation('setting-range') }}>Easy</button>
        <button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => { setSelectedDifficulty('medium'); setNavigation('setting-range') }}>Medium</button>
        <button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => { setSelectedDifficulty('hard'); setNavigation('setting-range') }}>Hard</button>
      </div>
    </div>
  )
}

export default Difficulty
