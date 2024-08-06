import React, { useState } from 'react'
import ModelCard from './ModelCard';
import './model.css';

const Model = () => {
  const [openModelCard, setOpenModelCard] = useState(false);

  const [openOfferAccepted, setOpenOfferAccepted] = useState(false);

  const handleOpenModel = () =>
  {
    setOpenModelCard(true)
  }
  return (
    <div className='model'>
    
      {!openOfferAccepted && <div>
      <button onClick={handleOpenModel}>Show Offer</button>
      </div>}

      {openModelCard && <ModelCard setOpenModelCard={setOpenModelCard} setOpenOfferAccepted={setOpenOfferAccepted} />}

      {openOfferAccepted && <div className="offerAccepted">
        <h3>Offer Accepted</h3>
      </div>}
      
      </div>
  )
}

export default Model