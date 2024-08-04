import React, { useEffect, useState } from 'react'

const AccordianItem = ({ item, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() =>
  {
    if (index == 0)
    {
      setShowAnswer(true)
    }
  }, [])
  const handleClick = () =>
  {
    setShowAnswer((showAnswer)=>!showAnswer)
  }
  return (
    <div className='faq-box'>
      <div className="question" onClick={handleClick}>
        <button className={`${showAnswer ? 'arrow' :''}`}>{'>'}</button>
        {item.question}
      </div>
      {showAnswer && <div className="answer">{ item.answer}</div>}
    </div>
  )
}

export default AccordianItem