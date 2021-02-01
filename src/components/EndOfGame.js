
function EndOfGame ({ teams, setTeams, setSelectedCategory, setSelectedRange, setSelectedDifficulty, setNavigation }) {
  return (
    <div>
      <button className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple' onClick={() => { setSelectedCategory(null); setSelectedRange(1); setSelectedDifficulty(null); setTeams = ([]); setNavigation('home-screen') }}>New Game</button>
      <button className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple' onClick={() => setNavigation('home-screen')}>Quit</button>
    </div>
  )
}

export default EndOfGame
