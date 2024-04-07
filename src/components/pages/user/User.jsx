import React from "react";
import "./user.scss";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitlecontainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/newUser"}>
        <button className="useraddButton">Create</button>
        </Link>
      </div>
      <div className="userConatiner">
        <div className="userShow">
          <div className="userShowtop">
            <img
              src="https://wallpapersmug.com/download/3840x2400/01e1be/pirate-monkey-d-luffy-from-one-piece-anime.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowtopTitle">
              <div className="userShowUsername">ANna</div>
              <div className="userShowUserTitle">Software engineer</div>
            </div>
          </div>
          <div className="userShowbottom">
            <span className="usershowtitle">Account Details</span>
            <div className="usershowInfo">
              <PermIdentity className="usershowIcon" />
              <span className="usershowwinfoTitle">avnaback099</span>
            </div>
            <div className="usershowInfo">
              <CalendarToday className="usershowIcon" />
              <span className="usershowwinfoTitle">01.12.1999</span>
            </div>
            <span className="usershowtitle">Contact Details</span>
            <div className="usershowInfo">
              <PhoneAndroid className="usershowIcon" />
              <span className="usershowwinfoTitle">+91 1234567890</span>
            </div>
            <div className="usershowInfo">
              <MailOutline className="usershowIcon" />
              <span className="usershowwinfoTitle">avnaback099@gmail.com</span>
            </div>
            <div className="usershowInfo">
              <LocationSearching className="usershowIcon" />
              <span className="usershowwinfoTitle">India</span>
            </div>
          </div>
        </div>
        <div className="userupdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userupdateForm">
            <div className="userupdateLeft">
              <div className="userupdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="avnaback099"
                  className="userupdateInput"
                />
              </div>
              <div className="userupdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="ANna"
                  className="userupdateInput"
                />
              </div>
              <div className="userupdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="avnaback099@gmail.com"
                  className="userupdateInput"
                />
              </div>
              <div className="userupdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="1234567890"
                  className="userupdateInput"
                />
              </div>
              <div className="userupdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="India"
                  className="userupdateInput"
                />
              </div>
            </div>
            <div className="userupdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://wallpapersmug.com/download/3840x2400/01e1be/pirate-monkey-d-luffy-from-one-piece-anime.jpg"
                  alt=""
                  className="userupdateImage"
                />
                <label htmlFor="file">
                  <Publish className="userupdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userupdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
