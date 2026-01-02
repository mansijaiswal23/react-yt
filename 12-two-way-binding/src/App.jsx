//Two Way Binding


import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault();
  console.log('Form Submitted');
  setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e) =>{
          submitHandler(e)
      }}>
        <input type="text" placeholder="Enter Your Name"
        value={title} onChange={(e) =>{
          // console.log(e.target)
          // console.log(e.target.value)
          setTitle(e.target.value)
        }} id="" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
