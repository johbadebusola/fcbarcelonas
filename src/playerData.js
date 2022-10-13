
import React from 'react'

const playerData = ({data,loading,error}) => {

    const playerInfo = data.map((players) => (<div key={players.name} className="container">
        <p className='name'>{players.name}</p>
        <img src={players.image} />
        <p className='position'>{players.position}</p>
        <p className='info'>{players.info}</p>
        <p className='biodata'>{players.biodata}</p>
    </div>))
  return (
    <div>
    {loading ? (<h5> {playerInfo} </h5>) : (<h4>loading..........</h4>) }
       {error}
        </div>
  )
}

export default playerData