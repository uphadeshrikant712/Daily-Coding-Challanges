import React from 'react'

const Pagination = ({ pageNo, setPageNo }) => {
  
  return (
    <div className='pagination-container'>
      <div className="">{ "<"}</div>
      <div className="">{ pageNo}</div>
      <div className="">{ ">"}</div>
    </div>
  )
}

export default Pagination