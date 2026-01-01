import React from 'react'
import {Bookmark} from 'lucide-react' 

const Card = (props) => {
    console.log(props.companyName)
  return (
    <div className="card">
        <div>
        <div className="top">
          <img src={props.logo}/>
          <button>Save <Bookmark /> <Bookmark size={12} color='#fafafa'strokeWidth={.25}/></button>
        </div>
        <div className="centre">
          <h3>{props.company}:<span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tagg1}</h4>
            <h4>{props.tagg2} </h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            
              <h3>{props.amount}</h3>
              <p>{props.place}</p>
           
          </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
