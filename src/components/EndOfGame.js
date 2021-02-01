
function EndOfGame ({ selectedCategory, selectedDifficulty, selectedRange, teams, setTeams, setSelectedCategory, setSelectedRange, setSelectedDifficulty, setNavigation }) {
  return (
    <div className='end-of-game-main'>
      <div>
        <button className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button' onClick={() => { setSelectedCategory(null); setSelectedRange(1); setSelectedDifficulty(null); setTeams = ([]); setNavigation('home-screen') }}>New Game</button>
        <button className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button' onClick={() => setNavigation('home-screen')}>Quit</button>
      </div>
      <div className='game-results-conatiner'>
        <div className='game-setup-details'>
          <div className='end-of-game-content'><strong>Category:</strong> {selectedCategory.name}</div>
          <div className='end-of-game-content'><strong>Difficulty:</strong> {selectedDifficulty}</div>
        </div>
        <div className='game-winner-details'>
          <div className='end-of-game-content'><strong>Winner Is</strong> Enter cool team's name here</div>
        </div>
      </div>
    </div>
  )
}

export default EndOfGame
