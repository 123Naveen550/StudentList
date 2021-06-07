// import axios from "axios";
import React, { Component } from "react";
import "./Css/Add.css";

class Edit extends Component {
  constructor() {
    super();
    this.state = {};
  }

 render() {
 return (
  <div>
    <div
      class="modal fade"
      id="Edit"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Edit Student
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="form">
              <div className="Detail-requried">
                <label>Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="Detail-requried">
                <label>Email</label>
                <input type="text" name="name" id="name" placeholder="Email" />
              </div>
              <div className="Detail-requried">
                <label>Qualification</label>
                <select class="form-control" id="make">
                  <option value="">- Select -</option>
                  <option value="1">Mca</option>
                  <option value="2">B.tech</option>
                  <option value="3">Bca</option>
                  <option value="4">Mba</option>
                </select>
              </div>

              <div class="reset-save Detail-requried">
                <div>
                  <button type="button" class="btn btn-success">
                    Save
                  </button>
                </div>
                <div>
                  <button type="button" class="btn btn-danger">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
 }
}

export default Edit;
