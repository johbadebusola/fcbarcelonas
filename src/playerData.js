
import React from 'react'
import './App.css';


const playerData = ({data,loading,error}) => {

    const playerInfo = data.map((players) => (<div key={players.name} className="container">
        <div className='container-box'>
     
        <h3 className='name'>{players.name}</h3>
        <h4 className='number'> {players.number}</h4>
        
        <img className='image' src={players.image} />
        <p className='position'>{players.position}</p>
        </div>
        <p className='info'>{players.info}</p>
        <p className='biodata'>{players.biodata}</p>
    </div>))
     
     
  
  return (
    <div className='cont'>
      <h2 className="head"> FC BARCELONA FIRST TEAM</h2>
    {loading ? (<h5> {playerInfo} </h5>) : (<h4 className='loader'>loading..........</h4>) }
       {error}
        </div>
  )
}

export default playerData