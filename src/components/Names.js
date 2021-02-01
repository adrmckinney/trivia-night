
function Names ({ teams, setTeams, setNavigation }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    setNavigation('selecting-category')
  }

  function onNameChange (event, idx) {
    // console.log('name change', event.target.value, idx)
    const newTeams = [
      ...teams
    ]
    newTeams[idx] = {
      ...newTeams[idx],
      name: event.target.value
    }

    setTeams(newTeams)
  }

  return (
    <div>
      <div className='screen-title-back-button-container'>
        <h3 className='f3 f2-m f1-l fw2 black-90 mv3'>Enter Your Team Names</h3>
        <button
          className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
          onClick={() => setNavigation('home-screen')}
        >
          Go back to home screen
        </button>
      </div>
      <div className='page-content-container'>
        {teams.map((team, idx) => (
          <form className='team-entry-field' key={`name-form-${idx}`} onSubmit={handleSubmit}>
            <input
              type='text'
              value={team.name}
              placeholder={`TEAM ${idx + 1}`}
              required
              onChange={(event) => onNameChange(event, idx)}
            />
          </form>

        ))}
        <input
          type='submit' value='Done' className='f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple handler-button'
          onClick={() => handleSubmit}
        />
      </div>

    </div>
  )
}

export default Names
