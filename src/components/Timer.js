// Borrowed from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks.
// Adapted for my own needs

import { useState, useEffect } from 'react'

function Timer () {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function toggle () {
    setIsActive(!isActive)
  }

  function reset () {
    setSeconds(30)
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (
    <div className='timer-container'>
      <div className='time'>
        {seconds}s
      </div>
      <div className='row'>
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className='button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
