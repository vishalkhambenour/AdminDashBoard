import React from "react";
import "./topbar.scss";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">Admin</span>
        </div>
        <div className="topright">
          <div className="topbarIconconatiner">
            <NotificationsNone/>
            <span className="topIconbag">2</span>
          </div>
          <div className="topbarIconconatiner">
            <Language/>
            <span className="topIconbag">2</span>
          </div>
          <div className="topbarIconconatiner">
            <Settings/>
          </div>
          <img src="https://e1.pxfuel.com/desktop-wallpaper/429/293/desktop-wallpaper-coque-et-etui-iphone-luffy-smiling-zoro-aesthetic-ps4-thumbnail.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
