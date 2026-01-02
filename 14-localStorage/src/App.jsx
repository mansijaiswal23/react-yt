import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('user','Sarthak')
  // const user = localStorage.getItem('user')
  // console.log(user)

  // localStorage.setItem('age','18')
  // const age = localStorage.getItem('age')
  // const user = localStorage.getItem('user')

  // console.log(user,age)
  // localStorage.removeItem('user')
  // localStorage.removeItem(age)

  // const user = {
  //   username: 'Sarthak',
  //   age: 28,
  //   city:"Bhopal"
  // }
  // console.log(user)

  // localStorage.setItem('user',JSON.stringify(user))

  // const user = localStorage.getItem('user')
  // console.log(user)

  // console.log(typeof(user))
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    <div>
      
    </div>
  )
}

export default App
