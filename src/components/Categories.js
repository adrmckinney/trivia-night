
function Categories ({ categories, setSelectedCategory, setDifficulty, setNavigation }) {
  console.log('categories', categories)
  // const [showDifficulties, setShowDifficulties] = useState(false)
  return (
    <>
      <div>
        <div className='screen-title-back-button-container'>
          <h3 className='f3 f2-m f1-l fw2 black-90 mv3'>Select a Category</h3>
          <button
            className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
            onClick={() => setNavigation('setting-names')}
          >
            Go back to enter team names
          </button>
        </div>
        <div className='section-content'>
          {categories.map((category) => (
            <button
              className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-mid-gray category-name' key={category.id}
              onClick={() => { setSelectedCategory(category); setNavigation('setting-difficulty') }}
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
