import { useState } from 'react'

function HomeScreen ({ setNumberOfTeams }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setNumberOfTeams(value)
  }
  return (
    <div>
      <h1>Welcome to Trivia Night</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>How many teams?</label>
          <input
            type='number'
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default HomeScreen
