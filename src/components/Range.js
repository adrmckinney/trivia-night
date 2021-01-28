function Range ({ setRange, selectedCategory, selecteddifficulty }) {
  return (
    <div>
      <div>
        <div>{selectedCategory}</div>
        <div>{selecteddifficulty}</div>
      </div>
      <div>
        <button onClick={() => setRange(10)}>10</button>
        <button onClick={() => setRange(25)}>25</button>
        <button onClick={() => setRange(50)}>50</button>
      </div>
    </div>

  )
}

export default Range
