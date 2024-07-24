import React, { useState } from 'react'
import "./colorstyle.css";

const ColorGenerator = () => {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const generateRandomHexColor = () =>
  {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++)
    {
      hexColor += hex[Math.floor(Math.random() * 16)];
    }
    setColor(hexColor);
  }
  const generateRandomRGBColor = () =>
  {
    const rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} )`;

    setColor(rgb);
  }
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: color,
    }} className='Maiin'>
      <button onClick={()=>setTypeOfColor('hex')}>Generate Hex Color</button>
      <button onClick={()=>setTypeOfColor('rgb')}>Generate RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? generateRandomHexColor : generateRandomRGBColor}>Generate Random Color</button>
      <div className="innner">
        <h1>{typeOfColor === 'hex' ? "Hex Color" : "RGB Color" }</h1>
        <h3>{ color}</h3>
      </div>
    </div>
  )
}

export default ColorGenerator