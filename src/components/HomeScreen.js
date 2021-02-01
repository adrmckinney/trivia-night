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
    <div className='home-screen-container'>
      <h1 className='home-screen-title f3 f2-m f1-l fw2 black-90 mv3'>Welcome to Trivia Night</h1>
      <div>
        <form onSubmit={handleSubmit} className='home-form'>
          <label className='home-screen-label'>How many teams?</label>
          <input
            className='home-screen-input'
            type='number'
            value={numberOfTeams}
            onChange={(event) => setNumberOfTeams(event.target.value)}
          />
          <input className='home-screen-btn' type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default HomeScreen
