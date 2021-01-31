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
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [range, setRange] = useState(false)
  const [selectedRange, setSelectedRange] = useState(1)
  const [teams, setTeams] = useState([])
  const [navigation, setNavigation] = useState('home-screen')

  // ******** debugging station ******************

  console.log('selected range: ', selectedRange)
  console.log('number of teams', teams)

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

  if (navigation === 'playing-game') {
    gameSetup = <PlayGame selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} teams={teams} setNavigation={setNavigation} />
    gameTracker = <GameTracker selectedCategory={selectedCategory} teams={teams} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} />
  } else if (navigation === 'setting-range') {
    gameSetup = <Range selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} setRange={setRange} selectedRange={selectedRange} setSelectedRange={setSelectedRange} setNavigation={setNavigation} />
    gameTracker = <GameTracker selectedCategory={selectedCategory} teams={teams} selectedDifficulty={selectedDifficulty} />
  } else if (navigation === 'setting-difficulty') {
    gameSetup = <Difficulty selectedCategory={selectedCategory} setSelectedDifficulty={setSelectedDifficulty} setRange={setRange} setNavigation={setNavigation} />
    gameTracker = <GameTracker selectedCategory={selectedCategory} teams={teams} />
  } else if (navigation === 'selecting-category') {
    gameSetup = <Categories categories={categories} setSelectedCategory={setSelectedCategory} setDifficulty={setDifficulty} setNavigation={setNavigation} />
  } else if (navigation === 'setting-names') {
    gameSetup = <Names teams={teams} setTeams={setTeams} setNavigation={setNavigation} />
  } else {
    gameSetup = <HomeScreen teams={teams} setTeams={setTeams} setNavigation={setNavigation} />
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
