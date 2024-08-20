import React, { useState } from 'react';
import './Bg.css';

const BgChange = () => {
  const [active, setActive] = useState('positive');
  const handleClick = (option) =>
  {
    setActive(option)
  }
  return (
    <div className='bg'>
      <h4
        onClick={() =>handleClick('positive')}
        className={`${active === 'positive' ? 'active' : 'button'}`}>
        Positive
      </h4>
      <h4 onClick={() => handleClick('negative')}
        className={`${active == 'negative' ? 'active' : 'button'}`}>
        Negative
      </h4>
    </div>
  )
}

export default BgChange