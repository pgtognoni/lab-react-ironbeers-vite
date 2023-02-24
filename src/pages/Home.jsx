import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className='section-container'>
        <section className="section sec-1">
            <div className='section-img img1'>
            </div>
            <div className='section-text'>
                <h4 className='section-title'><Link to='/listofbeers'>Explore all the Beers</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </section>
        <section className="section sec-2">
            <div className='section-img img2' >
            </div>
            <div className='section-text'>
                <h4 className='section-title'><Link to='/randombeer'>Check a Random Beer</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </section>
        <section className="section sec-3">
            <div className='section-img img3'>
            </div>
            <div className='section-text'>
                <h4 className='section-title'><Link to='/newbeer'>Create a  New Beer</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </section>

    </div>
  )
}

export default Home