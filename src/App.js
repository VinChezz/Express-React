import React, { useEffect, useState} from "react"
import './App.css'

export function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await
  fetch('http://localhost:5000/api')
      const jsonData = await
  response.json()
      setData(jsonData.message);
    } catch (error) {
      console.log('error fetching data:', error)
    }
  }

  return (
    <div>
      <header className="App-header">
        <h1>Data from Express server:</h1>
        <p>{data}</p>
      </header>
    </div>
  )
}