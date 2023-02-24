import React from 'react'

function singleCard({ singleBeer }) {
  
  return (
    <>
    {singleBeer.map(beer => {
        return (
    <div className='one-card' key={beer._id}>
            <div className='beer-img-container'>
                <img className='beer-img' src={beer.image_url} alt={beer.name} />
            </div>
            <div className='beer-info-container' >
                <div className='beer-header'>
                    <h6 className='beer-title'>{beer.name}</h6>
                    <h6 className='text-gray'>{beer.attenuation_level}</h6>
                </div>
                <div className='beer-subheader'>
                    <p className='text-gray'>{beer.tagline}</p>
                    <p><strong>{beer.first_brewed}</strong></p>
                </div>
                <div className='beer-info-container'>
                    <p>{beer.description}</p>
                    <br></br>
                    <p className='text-gray'>Created by: {beer.contributed_by}</p>
                </div>
            </div>
    </div>
    )})}
    </>
  )
}

export default singleCard