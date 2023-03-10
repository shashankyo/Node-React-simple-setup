// import { response } from 'express'
import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      <h2>Welcome All</h2>
      <form>
        <label>Name</label>
        <input type="text" name="name"></input>
        <br></br>
        <br></br>
        <label>Email</label>
        <input type="text" name="email"></input>
        <br></br>
        <br></br>
        <label>Phone</label>
        <input type="text" name="phone"></input>
        <br></br>
        <br></br>
        <label>ID</label>
        <input type="text" name="id"></input>
      </form>
      {(typeof backendData.users === 'undefined')? (
        <p>Loading</p>
      ): (
        backendData.users.map((user, i)=> (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App
