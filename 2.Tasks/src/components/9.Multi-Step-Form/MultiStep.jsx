import React, { useState } from 'react';
import './multistep.css'

const MultiStep = () => {
  const data = [
    {
      id: 'name',
      label: 'Name',
      inputType: 'text',
      button: 'Next',
      placeholder: 'Enter Name...',
    },
    {
      id: 'email',
      label: 'Email',
      inputType: 'email',
      button: 'Next',
      placeholder: "Enter Email...",
    },
    {
      id: 'dob',
      label: "DOB",
      inputType: 'date',
      button: 'Next',
      placeholder: '',
    },
    {
      id: 'password',
      label: 'Password',
      inputType: 'password',
      button: 'Submit',
      placeholder: 'Enter Password...'
    }
  ]
  const [index, setIndex] = useState(0);
  const [forms, setForms] = useState(data);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    dob: '',
    password: "",
  });
  const handleOnSumbit = (e) => {
    e.preventDefault();
    if (index == forms.length - 1) {
      // alert('Form Submitted...!');
      alert(JSON.stringify(formData,null,2))
      setIsFormSubmitted(true);
    }
    else {

      setIndex((idx) => idx + 1)
    }

  }
  const handleBack = (e) => {
    e.preventDefault()
    setIndex((idx) => idx - 1)
  }
  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;

    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  }
  console.log(formData);
  return (
    <div>
      {
        !isFormSubmitted
          ?
          <form action="" className='form' onSubmit={handleOnSumbit}>
            {
              index > 0 && <a href="/" onClick={handleBack}>Back</a>
            }
            <label htmlFor=""> {forms[index].label}</label>
            <input value={formData[forms[index].id]} id={forms[index].id} onChange={handleInputChange} type={forms[index].inputType} placeholder={forms[index].placeholder} />
            <button>{forms[index].button}</button>
          </form>
          :
          <div className="success">
            <h1>Success</h1>
            <h3>Form Details</h3>
            <hr />
            <span>Name : {formData.name}</span>
            <br />

            <span>Email : {formData.email}</span>
            <br />

            <span>DOB : {formData.dob}</span>
            <br />

            <span>Password : {formData.password}</span>
          </div>
      }
    </div>
  )
}

export default MultiStep