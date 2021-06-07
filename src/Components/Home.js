import React, { useState, useEffect } from "react";
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

  const remove =async (id) =>{
    // alert(id)
    const detail = await axios.delete(`http://localhost:3031/students/${id}`);
    console.log(detail);
    window.location.href="/"
}

  return (
    <div className="Flex-box">
      <div className="Header">
        <div>Student list</div>
        <div className="btn-Add">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#Add"
          >
            ADD
          </button>
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
                    <button type="button" class="btn btn-light" data-toggle="modal"
            data-target="#Edit">
                      Edit
                    </button>
                    <button type="button" class="btn btn-light" onClick={(id)=>{
                      remove(ele.id)
                    }} >
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

