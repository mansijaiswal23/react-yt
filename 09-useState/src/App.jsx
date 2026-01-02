import React, { useState } from 'react'

const App = () => {
  
  // const [a,setA] = useState('Aman');
  // const [username, setUserName] = useState('Mansi');

  // function changeA(){
  //   setA(30)
  // }
  

  const [num,setNum] = useState(2);
  function increase(){
    setNum(num+1)

  }
  function decrease(){
     setNum(num-1)
  }
  function jumpBy5(){
    setNum(num+5)
  }

  return (
    <div>
      {/* <h1>Value of a is {a} <br/> value of user is  {username}</h1> */}
      {/* <button onClick={changeA}>Click</button> */}

      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jumpBy5}>Jump by 5</button>
    </div>
  )
}

export default App
