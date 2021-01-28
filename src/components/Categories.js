
function Categories ({ categories, setSelectedCategory, setDifficulty }) {
  console.log('categories', categories)
  // const [showDifficulties, setShowDifficulties] = useState(false)
  return (
    <>
      <div>
        <h3 className='f3 f2-m f1-l fw2 black-90 mv3'>Select a Category</h3>
        <div className='section-content'>
          {categories.map((category) => (
            <button
              className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray category-name' key={category.id}
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
