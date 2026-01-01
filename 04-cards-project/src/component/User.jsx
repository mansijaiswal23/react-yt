import React from 'react'

const User = (props) => {
  return (
    <div className='user' style={{color:'white'}}>
      {props.name}
    </div>
  )
}

export default User
