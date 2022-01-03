import logo from './logo.svg';
import './App.css';

import {useState} from 'react';
function App() {
  const[FullName , setFullname] = useState("");
  const[Email , setEmail] = useState("");
  const[gender , setGender] = useState("");
  const[cntry,setCntry]=useState("")
  let country =["select country" ,"india","uk","usa","vietnam"];
  return (
    <div>
      <title>Registration form</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />

      <div className="container">
        <div className="header">
          <h2 style={{textAlign: 'center'}}>Registration Account</h2>
        </div>
        <div id="form" className="form">
          <div className="form-control">
            <label htmlFor="name">Fullname</label>
            <input onChange={(data)=>{setFullname(data.target.value)}}type="text" id="username" />
            {FullName.length === 0 ?<p id="ad1">Please enter your name</p> : isNaN(FullName) ? "": <p id="ad1">Please use only alphabate</p>}
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input onChange={(dataOne)=>{setEmail(dataOne.target.value)}} type="email" id="email" />
            {Email.length === 0 ?<p id='ad1'>Please enter Email</p>: Email.includes("@") && Email.includes(".") ?"" : <p id="ad1">Please enter correct email address </p> } 
          </div>
          
          <div className="form-control">
            <label htmlFor="gender">Gender</label>
            <p style={{textAlign: 'center'}}>male</p>
            <input onChange={(e)=>{setGender({male: e.target.checked})}} type="radio" name="gender" defaultValue="male" id="male" />
            <p style={{textAlign: 'center'}}>Female</p>
            <input onChange={(f)=>{setGender({Female: f.target.checked})}} type="radio" name="gender" defaultValue="female" />
            {Object.keys(gender).length === 0 ? <p id="ad1">Please select gender</p> : ""}
            
          </div>
          <div className="form-control">
            <label htmlFor="country">Country</label>
            <select onChange={(ad)=>{setCntry(country[ ad.target.options.selectedIndex])}} name="country" id="country">
              <option value="india">Select Country</option>
              <option value="india">India</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Vietnam">Vietnam</option>
            </select>
            {cntry=="select country"?<p id='ad15'>select your country</p>:''}
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <i className="fa fa-check-circle" />
            <i className="fa fa-exclamation-circle" />
          </div>
          <div className="form-control">
            <label htmlFor="username">Password check</label>
            <input type="password" id="password2" />
            <i className="fa fa-check-circle" />
            <i className="fa fa-exclamation-circle" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
