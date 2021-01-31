import { useState } from 'react'

function HomeScreen ({ setTeams, setNavigation }) {
  const [numberOfTeams, setNumberOfTeams] = useState(1)
  const handleSubmit = (event) => {
    event.preventDefault()
    const output = []
    for (let i = 0; i < numberOfTeams; i++) {
      output.push({ name: '', score: 0 })
    }
    setTeams(output)
    setNavigation('setting-names')
  }

  return (
    <div>
      <h1>Welcome to Trivia Night</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>How many teams?</label>
          <input
            type='number'
            value={numberOfTeams}
            onChange={(event) => setNumberOfTeams(event.target.value)}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default HomeScreen
