import React from 'react'

const Pagination = ({ pageNo, setPageNo }) => {
  const prevThreeNoArr = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index).filter((value) => value > 0).reverse();
  const nextFourNoArr = Array.from({ length: 4 }, (_, index) => pageNo + index);

  const paginationArr = [...prevThreeNoArr, ...nextFourNoArr];
  const handlePrev = () => {
    setPageNo(pageNo - 1);
  }
  const handleNext = () => {
    setPageNo(pageNo + 1);
  }

  return (
    <div className='pagination-container'>
      {pageNo > 1 && <div onClick={handlePrev} className="prev btn">{"<"}</div>}

      {
        paginationArr.map((value) => {
          return (
            <div onClick={() => setPageNo(value)} className={ value == pageNo ? 'pageNo btn active' : 'pageNo btn'}>{value}</div>
          )
        })
      }

      <div onClick={handleNext} className="next btn">{">"}</div>
    </div>
  )
}

export default Pagination