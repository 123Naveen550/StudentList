import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Css/home.css";



export default function Home() {
  const [studentDetail, setstudentDetail] = useState([]);
  useEffect(() => {
    loadstudents();
  }, []);

  const loadstudents = async () => {
    const studentInfo = await axios.get("http://localhost:3031/students");
    setstudentDetail(studentInfo.data);
  };

  const deletedata = async id => {
    await axios.delete(`http://localhost:3031/students/${id}`);
    loadstudents();
}
   


  return (
    <div className="Flex-box">
      <div className="Header">
        <div>Student list</div>
        <div className="btn-Add">
          <Link to="/Addpage"><button
            type="button"
            class="btn btn-primary"
          >
            ADD
          </button></Link>
        </div>
      </div>
      <div className="flex-table">
        <table className="Data-table">
          <tr className="Heading">
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Qualification</th>
            <th>Created On</th>
            <th>Action</th>
          </tr>
          {studentDetail.map((ele,index)=> {
            return (
              <tr className="Table-data">
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.qualification}</td>
                <td>{ele.currentdate}</td>
                <td>
                  <div>
                  <Link to={`/Edit/${ele.id}`}> <button type="button" class="btn btn-light"
           >
                      Edit
                    </button></Link> 
                    <button type="button" class="btn btn-light"  onClick={()=>deletedata(ele.id)}
                      
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
        }

