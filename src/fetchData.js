
import React, { useEffect, useState } from 'react'
import PlayerData from './playerData'


function PlayerInfo() {
const [data,SetData] = useState([])
const [loading,setLoading] = useState("")
const [error,setError] = useState("")

async function getData() {

    const response = await fetch("https://6345cf7539ca915a69085e5a.mockapi.io/players")
    const result = await response.json()
    return result
}
    useEffect(() => {
    getData()
    .then(result => {
       
        setLoading(true)
        SetData(result)
    })
    .catch((error) => setError("No internet connection"))
    },[])


  return (
    <div>
       <h1>{error}</h1>
        <PlayerData data={data} loading={loading} error={error}/>
    </div>
  )
}

export default PlayerInfo