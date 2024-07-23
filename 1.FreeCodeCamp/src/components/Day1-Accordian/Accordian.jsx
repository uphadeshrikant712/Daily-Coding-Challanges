import React, { useState } from 'react';
import "./styles.css";
import data from "./data.js";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  const handleMultiSelection = (getCurrentId) =>
  {
    let cpyMultiple = [...multiple];
    const indexOfId = cpyMultiple.indexOf(getCurrentId);

    // console.log(indexOfId)
    if (indexOfId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(indexOfId, 1);
    
    setMultiple(cpyMultiple);
    
  }
  console.log(selected ,multiple)
  return (
    <div className='wrapper'>
      
      <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Multiple Accordian</button>
      <div className="accordian">
        {
          data && data.length > 0
            ?
            data.map((dataItem) => (
              <div className='main'>

                <div className="inner">
                  <h1>{dataItem.question}</h1>
                  <span onClick={ enableMultiSelection ? ()=> handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className='plus'>+</span>

                </div>
                {
                  enableMultiSelection ? multiple.indexOf(dataItem.id) !==-1 && <div className="answer">
                  {dataItem.answer}
                  </div>
                    :
                    selected === dataItem.id && <div className="answer">
                    {dataItem.answer}
                  </div>
                }
                {/* {
                  selected === dataItem.id ? <div className="answer">
                    {dataItem.answer}
                  </div> : null
                } */}

              </div>

            ))
            : <div>No data Present</div>
        }
      </div>

    </div>
  )
}

export default Accordian