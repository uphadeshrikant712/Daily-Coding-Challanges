import React, { useEffect, useState } from 'react'
import './pagination.css';
import axios from 'axios'
import Pagination from './Pagination';

const Post = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(5);
  useEffect(() =>
  {
    axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`).then((res)=>setData(res.data))
  },[pageNo])
  return (
    <div className='container'>
      <div className="post-container">
        {
          data.map((item,index) =>
          {
            return <img src={item.download_url} alt=''/>
          })
        }
      </div>
      <Pagination pageNo={pageNo} setPageNo={ setPageNo} />
    </div>
  )
}

export default Post