import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Categories from './components/Categories'
import SelectedCategory from './components/SelectedCategory'
import Difficulty from './components/Difficulty'
import Range from './components/Range'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [range, setRange] = useState(false)
  const [selectedRange, setSelectedRange] = useState(null)

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
      .then(response => {
        console.log('data', response.data.trivia_categories)
        setCategories(response.data.trivia_categories)
      })
  }, [])

  let gameSetup
  if (difficulty) {
    gameSetup = <Difficulty category={selectedCategory} setSelectedDifficulty={setSelectedDifficulty} handleBackToCategories={() => setDifficulty(false)} />
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
