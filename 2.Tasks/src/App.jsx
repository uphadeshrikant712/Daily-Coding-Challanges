import React from 'react';
import './App.css';
import PasswordEye from './components/1.PasswordEyeToggle/PasswordEye';
import Post from './components/2.Pagination/Post';
import ImageCarouseal from './components/3.ImageCarouseal/ImageCarouseal';
import Search from './components/4.Search Autocomplete/Search';
import Form from './components/5.FromHandelingNormalWay/Form';
import Counter from './components/6.CounterApp/Counter';
import CounterUseReducer from './components/6.CounterApp/CounterUseReducer';

const App = () => {
  return (
    <div>
      {/* <PasswordEye /> */}
      {/* <Post/> */}
      {/* <ImageCarouseal/> */}
      {/* <Search/> */}
      {/* <Form/> */}
      <Counter />
      <CounterUseReducer/>
    </div>
  )
}

export default App