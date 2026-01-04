import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    // const params = useParams()
    // console.log(params);

    const params = useParams();

  return (
    <div>
      <h2>{params.id} Course Detail Page</h2>
    </div>
  )
}

export default CourseDetails
