import React from 'react'
import './acordian.css';
import AccordianItem from './AccordianItem';

const Accordian = () => {
  const data = [
    {
      question: 'this is what ?',
      answer: 'this is answer'
    }, {
      question: 'this is what ?',
      answer: 'this is answer'
    }, {
      question: 'this is what ?',
      answer: 'this is answer df'
    },
  ]
  return (
    <>
      <h1>Multi Accordian Example</h1>
      {data.map((item, index) => (
      
      <AccordianItem item={item} index={index} />)
    )
      }
  </>
      
  )
}

export default Accordian