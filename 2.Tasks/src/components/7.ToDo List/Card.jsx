import React from 'react'

const Card = ({list}) => {
  return (
    <div style={{
      paddingTop:'10px'
    }}>
      {
        list.length === 0 ? (
        <p>No Task at Right Now!</p>
        ) : (
            <ul>
              {
                list.map((item, index) =>
                {
                  return <li key={index}>{item} </li>
                })
              }
            </ul>
        )
          
      }
    </div>
  )
}

export default Card