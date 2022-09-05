import React from 'react'

const Display = ({ data, result, handleChange}) => {
  
  // value = {result === ''? data: result}
  return (
    <div className='Display'>      
      <label htmlFor="display">Display</label>
      <input 
        type="button"
        name="display"
        value ={data || result}
        onChange = {handleChange}
      />
    </div>
  )
}

export default Display