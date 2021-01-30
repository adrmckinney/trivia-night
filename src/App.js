import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import HomeScreen from './components/HomeScreen'
import Names from './components/Names'
import Categories from './components/Categories'
import PlayGame from './components/PlayGame'
import Difficulty from './components/Difficulty'
import Range from './components/Range'
import { getCategoryList } from './api'
import GameTracker from './components/GameTracker'

function App () {
  const [numberOfTeams, setNumberOfTeams] = useState(0)
  const [teamNames, setTeamNames] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [range, setRange] = useState(false)
  const [selectedRange, setSelectedRange] = useState(1)
  const [game, setGame] = useState(false)

  // ******** debugging station ******************

  console.log('selected range: ', selectedRange)
  console.log('number of teams', numberOfTeams)

  // ******** debugging station ******************

  // useEffect(() => {
  //   axios.get('https://opentdb.com/api_category.php')
  //     .then(response => {
  //       console.log('data', response.data.trivia_categories)
  //       setCategories(response.data.trivia_categories)
  //     })
  // }, [])

  useEffect(() => {
    getCategoryList(setCategories)
  }, [])

  let gameSetup
  let gameTracker

  if (numberOfTeams && difficulty && range && game) {
    gameSetup = <PlayGame selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} handleToQuit={() => { setRange(false); setDifficulty(false); setGame(false) }} />
    gameTracker = <GameTracker selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} />
  } else if (numberOfTeams && difficulty && range) {
    gameSetup = <Range selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} setRange={setRange} selectedRange={selectedRange} setSelectedRange={setSelectedRange} setGame={setGame} handleBackToDifficulty={() => setRange(false)} />
    gameTracker = <GameTracker selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} />
  } else if (numberOfTeams && difficulty) {
    gameSetup = <Difficulty selectedCategory={selectedCategory} setSelectedDifficulty={setSelectedDifficulty} setRange={setRange} handleBackToCategories={() => setDifficulty(false)} />
    gameTracker = <GameTracker selectedCategory={selectedCategory} />
  } else if (numberOfTeams) {
    gameSetup = <Categories categories={categories} setSelectedCategory={setSelectedCategory} setDifficulty={setDifficulty} />
  } else if (numberOfTeams && teamNames) {
    gameSetup = <Names numberOfTeams={numberOfTeams} setTeamNames={setTeamNames} />
  } else {
    gameSetup = <HomeScreen numberOfTeams={numberOfTeams} setNumberOfTeams={setNumberOfTeams} />
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Trivia Generator</h1>
      </header>
      <main className='main-container'>
        <div className='game-play-container'>
          {gameSetup}
        </div>
        <div className='game-tracker-container'>
          {gameTracker}
        </div>
      </main>
    </div>
  )
}

export default App
