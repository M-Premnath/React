import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../Project 9 Axios/main.css'

const Edit = () => {
  const [values, setValues]= useState({name:"",email:""});
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`).then((res)=>{
        setValues(res.data);
        console.log(res.data);
    });
}, []);

  // Handle form submission to update the user data
  const handleEdit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, values)
      .then((res) => {
        console.log("User  updated:", res.data);
        navigate("/"); // Navigate back to the home page after updating
      })
      .catch((err) => {
        console.error("Error updating user:", err);
      });
  };
  return (
    <div className='form'>
      <form onSubmit={handleEdit}>
        <h1>Edit Data </h1>
        <input
          placeholder='Enter your Name'
          name='name'type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
        />
        <br />
        <input
          placeholder='Enter your Email'
          name='email'type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
        />
        <br />
        <input type='submit' value="Update" />
      </form>
    </div>
  );
};

export default Edit