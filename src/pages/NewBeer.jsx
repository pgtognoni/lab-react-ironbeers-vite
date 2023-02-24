import React, { useState } from 'react'

function NewBeer({ fetchDataApi }) {
    const [ name, setName ] = useState('')
    const [ tagline, setTagline ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ first_brewed, setFirstBrewed ] = useState('')
    const [ brewers_tip, setBrewersTip ] = useState('')
    const [ attenuation_level, setAttenuationLevel ] = useState(0)
    const [ contributed_by, setContributedBy ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newBeer = {
            name: name, 
            tagline: tagline, 
            description: description, 
            first_brewed: first_brewed, 
            brewers_tip: brewers_tip, 
            attenuation_level: attenuation_level, 
            contributed_by: contributed_by
        }
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBeer)
        })
        const parsed = await response.json()
        console.log(parsed)

        fetchDataApi()

        setName('')
        setTagline('')
        setDescription('')
        setFirstBrewed('')
        setBrewersTip('')
        setAttenuationLevel(0)
        setContributedBy('')

    }


  return (
    <div className='form-container'>
        <h1>New Beer</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:
                <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label htmlFor='tagline'>Tagline:
                <input type='text' name='tagline' value={tagline} onChange={e => setTagline(e.target.value)} />
            </label>
            <label htmlFor='description'>Description:
                <textarea cols={20} row={30} type='text' name='description' value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </label>
            <label htmlFor='first_brewed'>First Brewed:
                <input type='text' name='first_brewed' value={first_brewed} onChange={e => setFirstBrewed(e.target.value)} />
            </label>
            <label htmlFor='brewers_tip'>Brewers Tip:
                <input type='text' name='brewers_tip' value={brewers_tip} onChange={e => setBrewersTip(e.target.value)} />
            </label>
            <label htmlFor='attenuation_level'>Attenuation Level:
                <input type='number' name='attenuation_level' value={attenuation_level} onChange={e => setAttenuationLevel(e.target.value)} />
            </label>
            <label htmlFor='contributed_by'>Contributed By:
                <input type='text' name='contributed_by' value={contributed_by} onChange={e => setContributedBy(e.target.value)} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewBeer