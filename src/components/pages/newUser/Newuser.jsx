import React from "react";
import "./newuser.scss";

export default function Newuser() {
  return (
    <div className="newUser">
      <h1 className="newuserTitle">New User</h1>
      <form className="newuserForm">
        <div className="newuserItem">
          <label>UserName</label>
          <input type="text" placeholder="john1" />
        </div>
        <div className="newuserItem">
          <label>Full Name</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newuserItem">
          <label>Email</label>
          <input type="email" placeholder="john@13.com" />
        </div>
        <div className="newuserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newuserItem">
          <label>Phone</label>
          <input type="text" placeholder="1234567890" />
        </div>
        <div className="newuserItem">
          <label>Address</label>
          <input type="text" placeholder="India" />
        </div>
        <div className="newuserItem">
          <label>Gender</label>
          <div className="newuserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newuserItem">
          <label>Active</label>
          <select name="active" id="active" className="newuserSelect">
            <option value="yes">Yes</option>
            <option value="no">NO</option>
          </select>
        </div>
        <button className="newuserButton">Create</button>
      </form>
    </div>
  );
}
