import React from 'react'

const ModelCard = ({ setOpenOfferAccepted,setOpenModelCard }) => {
  const handleOfferAccepted = () =>
  {
    setOpenOfferAccepted(true);
    setOpenModelCard(false)
  }
  const handleX = () =>
  {
    setOpenOfferAccepted(false)
    setOpenModelCard(false)
  }
  return (
    <div onClick={handleX} className='main'>
      <div onClick={(e)=>e.stopPropagation()} className={`${setOpenOfferAccepted ? 'mainModel' :'model1' } `}>
        <div className="xbutton">
        <button onClick={handleX}>X</button>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nam consequatur explicabo.
        </div>
        <div className="butt">
          <button onClick={handleOfferAccepted}>Accept Offer</button>
        </div>
      </div>

      
    </div>
  )
}

export default ModelCard