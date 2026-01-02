import React , {useState} from 'react'

const App = () => {

  // const [num,setNum] = useState({user:'Sarthak ',age:20})

  const [num,setNum] = useState({user:"Rishi", age:18})

  const btnClicked = () => {
    // console.log("Button Clicked")
    // setNum(20)
    // console.log(num.user)

    // const newNum = {...num};
    // newNum.user = 'Harsh'
    // newNum.age=29
    // setNum(newNum);
    // setNum(newNum)

    // const newNum = [...num]
    // newNum.push(33)

    // console.log(newNum)
    // setNum(newNum)


    setNum(prev=>({...prev,age:50}))
  }
  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1> */}
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
