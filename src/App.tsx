import React, { useEffect, useState } from 'react'
import utils from './utils'

function App() {
  const [weater, setWeater] = useState({})

  useEffect(() => {
    utils.api.getWeather({ lat: 55.75396, lon: 37.620393 }).then((result) => {
      setWeater(result)
    })
  }, [])

  return <div className="App">{JSON.stringify(weater)}</div>
}

export default App
