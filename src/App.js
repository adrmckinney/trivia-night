import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Categories from './components/Categories'
import PlayGame from './components/PlayGame'
import Difficulty from './components/Difficulty'
import Range from './components/Range'
import { getCategoryList } from './api'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [range, setRange] = useState(false)
  const [selectedRange, setSelectedRange] = useState(null)
  const [game, setGame] = useState(false)

  console.log('selected range: ', selectedRange)

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
      .then(response => {
        console.log('data', response.data.trivia_categories)
        setCategories(response.data.trivia_categories)
      })
  }, [])

  // useEffect(() => {
  //   getCategoryList()
  //   setCategories()
  // }, [])

  let gameSetup

  if (difficulty && range && game) {
    gameSetup = <PlayGame selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} selectedRange={selectedRange} handleToQuit={() => { setRange(false); setDifficulty(false); setGame(false) }} />
  } else if (difficulty && range) {
    gameSetup = <Range selectedCategory={selectedCategory} selectedDifficulty={selectedDifficulty} setRange={setRange} setSelectedRange={setSelectedRange} setGame={setGame} handleBackToDifficulty={() => setRange(false)} />
  } else if (difficulty) {
    gameSetup = <Difficulty selectedCategory={selectedCategory} setSelectedDifficulty={setSelectedDifficulty} setRange={setRange} handleBackToCategories={() => setDifficulty(false)} />
  } else {
    gameSetup = <Categories categories={categories} setSelectedCategory={setSelectedCategory} setDifficulty={setDifficulty} />
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Trivia Generator</h1>
      </header>
      <main className='main-container'>
        {gameSetup}
      </main>
    </div>
  )
}

export default App
