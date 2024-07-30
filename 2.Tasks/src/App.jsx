import React from 'react';
import './App.css';
import PasswordEye from './components/1.PasswordEyeToggle/PasswordEye';
import Post from './components/2.Pagination/Post';
import ImageCarouseal from './components/3.ImageCarouseal/ImageCarouseal';
import Search from './components/4.Search Autocomplete/Search';
import Form from './components/5.FromHandelingNormalWay/Form';

const App = () => {
  return (
    <div>
      {/* <PasswordEye /> */}
      {/* <Post/> */}
      {/* <ImageCarouseal/> */}
      {/* <Search/> */}
      <Form/>
    </div>
  )
}

export default App