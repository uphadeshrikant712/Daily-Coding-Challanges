import React, { useEffect, useState } from 'react'

const TextChange = () => {
  const [text, setText] = useState("I am Software Engineer");
  useEffect(() =>
  {
    const intervalId = setInterval(() =>
    {
      setText((prevText)=> prevText === "I am Software Engineer"?"I am Software Developer":"I am Software Engineer")
    }, 1000)
    
    return () => clearInterval(intervalId);
  },[])
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default TextChange