import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();

    try {
      setError(false)
      setLoading(true)
      let colors = new Values(color).all(10);
      setList(colors)
      setLoading(false)
      console.log(colors);
    } catch (error) {
      console.log(error);
      setError(true)
      setLoading(false)
    }
  }

  const handleChange = e => {
    setColor(e.target.value)
  }

  const listElements = list.map((color, index) => {
    return <SingleColor key={index} {...color} index={index} hexValue={color.hex}/>
  })

  return (
    <>
      <section className='container'>
        <h3>Colors!</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            value={color}
            onChange={handleChange}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>submit</button>
        </form>
      
      </section>
      <section className='colors'>
        {error && <h2>Something Went Wrong. Please Check Your input And Try again</h2>}
        {loading && <h2>Loading...</h2>}
        {listElements}
      </section>
    </>
    
  )
}

export default App
