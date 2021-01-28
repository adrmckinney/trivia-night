import { useState } from 'react'
// import SelectDifficulty from './SelectDifficulty'

function Categories ({ categories, setSelectedCategory, setDifficulty }) {
  console.log('categories', categories)
  // const [showDifficulties, setShowDifficulties] = useState(false)
  return (
    <>
      <div>
        <h3 className='section-title'>Select a Category</h3>
        <div className='section-content'>
          {categories.map((category) => (
            <button
              className='category-name' key={category.id}
              onClick={() => { setSelectedCategory(category); setDifficulty(true) }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Categories
