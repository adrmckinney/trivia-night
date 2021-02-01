
export const handleSubmit = (event) => {
  event.preventDefault()
  console.log('submitting team number', numberOfTeams)
}

  <form className='team-entry-field' key={`name-form-${idx}`} onSubmit={handleSubmit}>
  <input
              type='text'
              value={team.name}
              placeholder={`TEAM ${idx + 1}`}
              required
              onChange={(event) => onNameChange(event, idx)}
            />
</form>
