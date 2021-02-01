import { useState, useEffect } from 'react'
import './App.css'
import HomeScreen from './components/HomeScreen'
import Names from './components/Names'
import Categories from './components/Categories'
import PlayGame from './components/PlayGame'
import Difficulty from './components/Difficulty'
import Range from './components/Range'
import { getCategoryList } from './api'
import GameTracker from './components/GameTracker'
import EndOfGame from './components/EndOfGame'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [selectedRange, setSelectedRange] = useState(1)
  const [teams, setTeams] = useState([])
  const [navigation, setNavigation] = useState('home-screen')

  // ******** debugging station ******************

  // console.log('selected range: ', selectedRange)
  // console.log('number of teams', teams)

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


  if (navigation === 'end-of-game') {
    gameSetup = <EndOfGame selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} teams={teams} setSelectedCategory={setSelectedCategory} setSelectedRange={setSelectedRange} setSelectedDifficulty={setSelectedDifficulty} setTeams={setTeams} setNavigation={setNavigation} />
  } else if (navigation === 'playing-game') {
    gameSetup = <PlayGame selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} teams={teams} setTeams={setTeams} setNavigation={setNavigation} setSelectedCategory={setSelectedCategory} setSelectedRange={setSelectedRange} setSelectedDifficulty={setSelectedDifficulty} />
  } else if (navigation === 'setting-range') {
    gameSetup = <Range selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} setSelectedRange={setSelectedRange} setNavigation={setNavigation} />
  } else if (navigation === 'setting-difficulty') {
    gameSetup = <Difficulty selectedCategory={selectedCategory} setSelectedDifficulty={setSelectedDifficulty} setNavigation={setNavigation} />
  } else if (navigation === 'selecting-category') {
    gameSetup = <Categories categories={categories} setSelectedCategory={setSelectedCategory} setNavigation={setNavigation} />
  } else if (navigation === 'setting-names') {
    gameSetup = <Names teams={teams} setTeams={setTeams} setNavigation={setNavigation} />
  } else {
    gameSetup = <HomeScreen teams={teams} setTeams={setTeams} setNavigation={setNavigation} />
  }

  let gameTracker

  if (navigation === 'selecting-category' || navigation === 'setting-difficulty' || navigation === 'setting-range' || navigation === 'playing-game') {
    gameTracker = <GameTracker selectedCategory={selectedCategory} teams={teams} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} navigation={navigation} />
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Trivia Night</h1>
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
