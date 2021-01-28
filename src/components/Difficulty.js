function Difficulty ({ difficulty, selectedDifficulty, setSelectedDifficulty, setDifficulty, handleBackToCategories, selectedCategory }) {
  return (
    <div>
      <div>{selectedCategory}</div>
      <div>
        <button onClick={() => setSelectedDifficulty('easy')}>Easy</button>
        <button onClick={() => setSelectedDifficulty('medium')}>Medium</button>
        <button onClick={() => setSelectedDifficulty('hard')}>Hard</button>
        <button
          className='go-to-categories-button'
          onClick={handleBackToCategories}
        >
          Go back to category list
        </button>
      </div>
    </div>
  )
}

export default Difficulty
