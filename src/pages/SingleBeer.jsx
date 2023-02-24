import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SingleCard from '../components/SingleCard'

function SingleBeer({ beers }) {

    const navigate = useNavigate()
    const { id } = useParams()
    const [singleBeer, setSingleBeer] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const newBeer = beers.find(beer => beer._id === id)
        !newBeer 
          ? navigate('/')
          : setSingleBeer([newBeer])
        setLoading(false)

        return () => {
            setLoading(true)
            setSingleBeer([])
        }
    }, [id])

  return (
    <>
    {loading 
        ? <h1>Loading...just chill</h1>
        : <SingleCard singleBeer={singleBeer} />
    }
    </>
  )
}

export default SingleBeer