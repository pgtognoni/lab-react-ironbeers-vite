import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListBeers from './pages/ListBeers'
import RandomBeer from './pages/RandomBeer'
import SigleBeer from './pages/SingleBeer'
import NewBeer from './pages/NewBeer'

function App() {

  const [ data, setData ] = useState([])

  const fetchDataApi = async () => { 
      const res = await fetch('https://ih-beers-api2.herokuapp.com/beers')
      const json = await res.json()
      setData(json)
  }
  useEffect(() => {
      fetchDataApi()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listofbeers" element={<ListBeers beers={ data } setData={setData} />} />
        <Route path="/randombeer" element={<RandomBeer beers={ data }/>} />
        <Route path="/:id" element={<SigleBeer beers={ data }/>} />
        <Route path="/newbeer" element={<NewBeer fetchDataApi={ fetchDataApi }/>} />

        <Route path="*" element={<h1>Page Not Found...try it better...</h1>} />
      </Routes>
    </div>
  )
}

export default App