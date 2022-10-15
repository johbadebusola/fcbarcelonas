
import React, { useEffect, useState } from 'react'
import PlayerData from './playerData'
import Paginate from './Paginate'

function PlayerInfo() {
const [data,SetData] = useState([])
const [loading,setLoading] = useState("")
const [error,setError] = useState("")
const [currentPage,setCurrentPage] = useState(1)
const [postPerPage] = useState(3)

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

const lastPlayerInfo = currentPage * postPerPage
const firstPlayerInfo = lastPlayerInfo - postPerPage
const currentPost = data.slice(firstPlayerInfo,lastPlayerInfo)

const paginates = (numbers) => setCurrentPage(numbers)
  return (
    <div>
       <h1>{error}</h1>
        <PlayerData data={currentPost} loading={loading} error={error}/>
        <Paginate postPerPage={postPerPage} totalPost={data.length} paginates={paginates} />
    </div>
  )
}

export default PlayerInfo