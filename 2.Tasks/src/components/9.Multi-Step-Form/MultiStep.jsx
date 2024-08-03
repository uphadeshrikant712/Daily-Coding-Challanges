import React from 'react'
import './multistep.css';

const MultiStep = () => {
  const data = [
    {
      id: "name",
      label: 'Name',
      inputType: "text",
      buttonName: "Next",
      placeholder: "Enter Name",
    },
    {
      id: 'email',
      label: "Email",
      inputType: 'email',
      buttonName: 'Next',
      placeholder: "Enter Email"
    },
    {
      id: "dob",
      label: 'DOB',
      inputType: "date",
      buttonName: "Next",
      placeholder: 'Enter DOB',
    },
    {
      id: 'password',
      label: 'Password',
      inputType: 'Password',
      buttonName: 'Submit',
      placeholder: ""
    }
  ];
  return (
    <div>
      <form action="" className='form'>
        <label htmlFor="">Name</label>
        <input type="text" />
        <button>Next</button>
      </form>
    </div>
  )
}

export default MultiStep