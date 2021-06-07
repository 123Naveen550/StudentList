import axios from 'axios'
import React,{Component}  from 'react'
import "./Css/Add.css";
class Addpage extends Component {
  constructor() {
    super()
    this.state = {
          nameErr:"",
          emailErr:"",
          qualificationErr:""
      }
  }
  vaild=()=>{
    if(!this.newstudentData.name){
      this.setState({
        nameErr:"please enter a valid Name."
      })
    }
    else if(this.newstudentData.email!=="@" && this.newstudentData.email!=="."){
        this.setState({
          emailErr:"please enter the valid E-mail with @ and ."
        })
    }
    else if(!this.newstudentData.qualification){
      this.setState({
        qualificationErr:"please enter valid information."
      })
    }

  }
  newstudentData={}

  stdName=(event)=>{
    this.newstudentData.name=event.target.value
  }
  stdEmail=(event)=>{
    this.newstudentData.email=event.target.value
  }
  stdQaulification=(event)=>{
    this.newstudentData.qualification=event.target.value
  }
  Submit=(event)=>{
    event.preventDefault();
    this.newstudentData.currentdate=new Date().toDateString();
    console.log(this.newstudentData);
    // if(this.vaild()){
      axios({
        method:"post",
        url:"http://localhost:3031/students",
        data:this.newstudentData
      }).then((res)=>{
        console.log(res)
        window.location.href="/"
      },(err)=>{
        console.log(err)
      })
    }
    
  // }


  render(){
    return (
    <div>            
       
       <div class="modal fade" id="Add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Student</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div className="form">
         
         <div className="Detail-requried">
        
           <label>Name</label>
           <input type="text" name="name" id="name" onChange={this.stdName} placeholder="Name"/>
         </div>
         <div className="Detail-requried">
           <label>Email</label>
           <input type="text" name="name" id="name" onChange={this.stdEmail} placeholder="Email"/>
         </div>
         <div className="Detail-requried">
           <label>Qualification</label>
           {/* <select class="form-control" id="make" onChange={this.stdQaulification}>
             <option value="">- Select -</option>
             <option value="1">Mca</option>
             <option value="2">B.tech</option>
             <option value="3">Bca</option>
             <option value="4">Mba</option>
           </select> */}
  
           <input type="text" name="name" id="name" onChange={this.stdQaulification} placeholder="Qualification" />
         </div>
         <div class="reset-save Detail-requried">
           <div>
             <button type="button" class="btn btn-success" onClick={this.Submit}>Submit</button>
           </div>
           <div>
             <button type="reset" class="btn btn-danger">Reset</button>
           </div>
         </div>
       </div>
       </div>
          </div>
          </div>
        </div>
    </div>)
  }
}
export default Addpage