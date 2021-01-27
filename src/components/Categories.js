import { useState } from 'react'
import SelectDifficulty from './SelectDifficulty'

function Categories ({ categories, setSelectedCategory, selectDifficulty, setSelectDifficulty }) {
  console.log('categories', categories)
  const [showDifficulties, setShowDifficulties] = useState(false)
  return (
    <>
      <div>
        <h3 className='section-title'>Select a Category</h3>
        <div className='section-content'>
          {categories.map((category) => (
            <button
              className='category-name' key={category.id}
              onClick={() => { setSelectedCategory(category); setShowDifficulties(!showDifficulties) }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        {/* {showDifficulties && (
          <div>
            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
          </div>
        )} */}
        {showDifficulties
          ? <SelectDifficulty difficulty={selectDifficulty} setSelectDifficulty={setSelectDifficulty} />
          : <Categories handleBackToCategorySelection={() => setSelectDifficulty(null)} />}
      </div>
    </>
  )
}

export default Categories
