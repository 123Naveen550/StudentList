import React, { useState } from 'react';
import axios from 'axios';
import "./Css/Add.css";
import { useHistory } from 'react-router-dom';


const Addpage = () => {
  let history = useHistory();
  const [AddStudent, setAddStudent] = useState({
    name: "",
    email: "",
    qualification: "",
    currentDateTime: new Date().toDateString()
  });
  const { name, email, qualification} = AddStudent;

  const onInputChange = e => {
    console.log(e.target.value);
    setAddStudent({...AddStudent,[e.target.name]:e.target.value})
  }

  const onSubmit=async e => {
    e.preventDefault();
    await axios.post("http://localhost:3031/students", AddStudent);
    history.push("/");
  }
  return (
    <div className="Body">
    <div className="container">
      <div className="title">
        Add New Data
      </div>
      <form className="form" onSubmit={e=>onSubmit(e)}>
             <div className="input_field">
                <label>Name<span className="span">*</span> :</label>                        
                <input type="text" className="input" name="name" value={name} onChange={e=>onInputChange(e)}/>
             </div>
          
              <div className="input_field">
                <label>E-mail <span className="span">*</span> :</label>                        
                <input type="text" className="input" name="email" value={email}    onChange={e=>onInputChange(e)}/>
              </div>
          
              <div className="input_field">
                <label>Qualification :</label>                              
                <div className ="custom_select">
                  <select   onChange={e=>onInputChange(e)} name="qualification" value={qualification}>
                    <option value=" ">Select</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                  </select>
                </div>
              </div>
              <div className="input_field input_button">
                <button className="btn">Submit</button>
                <button className="btn" type="reset">Reset</button>
              </div>
          </form>
      </div>
    </div>
  )
}
export default Addpage;