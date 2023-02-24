import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function ListBeers({ beers, setData }) {

    const [ beersArray, setBeers ] = useState([])
    const [ term, setTerm ] = useState('')


    useEffect(() => {
        setBeers(beers)
    }, [ beersArray, beers ])

    const handleSearch = async (e) => {
        e.preventDefault()
        const query = e.target.value;
        const res = await fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        const json = await res.json()
        setData(json)
    }

  return (
    <>
    <SearchBar handleSearch={handleSearch} setTerm={setTerm} />
    <div className='beers-container'>
        {beersArray.map((beer) => {
            return (
            <div className='beer-card' key={beer._id}>
            <div className='beer-img-container'>
                <img className='beer-img' src={beer.image_url} alt={beer.name} />
            </div>
            <div className='beer-info-container' >
                <Link to={`/${beer._id}`}><h1 className='beer-title'>{beer.name}</h1></Link>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
            </div>
            </div>
            )            
        })}
    </div>
    </>
  )
}

export default ListBeers