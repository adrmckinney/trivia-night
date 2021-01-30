import { useState } from 'react'

function Names ({ numberOfTeams, setTeamNames }) {
  const [value, setValue] = useState([])
  console.log('value array', value)

  const handleSubmit = (e) => {
    e.preventDefault()

    setTeamNames(value)
  }

  function SetNumOfEntryFields () {
    const numArray = []
    for (let idx = 0; idx < numberOfTeams; idx++) {
      numArray.push(
        <form key={idx} onSubmit={handleSubmit}>
          <label>Enter Team Name</label>
          <input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input type='submit' value='Submit Name' />
        </form>
      )
    }
    return numArray
  }

  return (
    <div>
      <div>Enter your team names</div>
      <div>
        <SetNumOfEntryFields />
      </div>

    </div>
  )
}

export default Names
