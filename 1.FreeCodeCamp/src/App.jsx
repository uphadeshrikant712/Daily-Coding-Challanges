import React from 'react'
import Accordian from './components/Day1-Accordian/Accordian';
import "./App.css";
import ColorGenerator from './components/Day2-ColorGenerator/ColorGenerator';

const App = () => {
  return (
    <div>

      {/* Accordian Component  */}
      <Accordian />
      
      {/* ColorGenerator Component  */}
      <ColorGenerator/>
      
    </div>
  )
}

export default App