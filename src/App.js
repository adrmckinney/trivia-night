import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Categories from './components/Categories'
import SelectedCategory from './components/SelectedCategory'
import SelectDifficulty from './components/SelectDifficulty'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectDifficulty, setSelectDifficulty] = useState(null)

  useEffect(() => {
    console.log('useEffect IS CALLED')
    axios.get('https://opentdb.com/api_category.php')
    console.log('DATA IS BEING FETCHED')
      .then(response => {
        console.log('data', response.data.trivia_categories)
        setCategories(response.data.trivia_categories)
      })
  }, [])

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Trivia Generator</h1>
      </header>
      <main className='main-container'>
        {selectedCategory
          ? <SelectedCategory category={selectedCategory} categories={categories} handleBackToCategorySelection={() => setSelectedCategory(null)} />
          : <Categories categories={categories} difficulty={selectDifficulty} setSelectDifficulty={setSelectDifficulty} setSelectedCategory={setSelectedCategory} />}

      </main>
    </div>
  )
}

export default App
