import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log('Button Clicked');

  // function inputChanging(val){
  //   console.log(val)
  // }
    
  const pageScrolling = (elem) => {
  //  console.log('page scroliing....at speed ',elem)
  if(elem>0){
    console.log('seedha scrolling')
  }
  else{
    console.log('ulta scrolling')
  }
  }
  
  

  return (
    <div>
      {/* <h1>Hello, Mansi</h1>
      <button onClick={function(){
        console.log("Hello Guz")
      }}>change user</button> */}

      {/* <input onClick={() => {
        console.log(`I'm got clicked`)
      }} type="text" placeholder='Enter name' /> */}

      {/* <input onChange={function(elem){
        // console.log(elem)
        inputChanging(elem.target.value);
      }} type="text" name="Enter Your Name" id="" /> */}
      {/* <div onMouseMove={(elem) => {
        console.log(elem.clientX)
      }} className="box"></div> */}

      

<div onWheel={(elem) =>{
  // console.log(elem.deltaY)
  pageScrolling(elem.deltaY)
}}>
      <div className="page1"> </div>
      <div className="page2"></div>
      <div className="page3"></div>
</div>
      

    </div>
  )
}

export default App
