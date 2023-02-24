import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleCard from '../components/SingleCard'

function RandomBeer() {

    const navigate = useNavigate()
    const [singleBeer, setSingleBeer] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {

        const fetchDataApi = async () => { 
            try {
                const res = await fetch('https://ih-beers-api2.herokuapp.com/beers/random')
                const json = await res.json()
                !json 
                    ? navigate('/')
                    : setSingleBeer([json])
                setLoading(false)
            } catch (error) { console.error(error) }
            }
    
        fetchDataApi()

        return () => {
            setLoading(true)
            setSingleBeer([])
        }
    }, [])

  return (
    <>
    {loading 
        ? <h1>Loading...just chill</h1>
        : <SingleCard singleBeer={singleBeer} />
    }
    </>
  )
}

export default RandomBeer
