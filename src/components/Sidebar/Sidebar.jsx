import React from "react";
import "./sidebar.scss";
import {
  AttachMoney,
  LineStyle,
  PersonOutline,
  Timeline,
  TrendingUp,
  AssessmentOutlined,
  EmailOutlined,
  ChatBubbleOutlineOutlined,
  Report,
  WorkOutline,
  LocalActivityOutlined,
  ChatOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <Link to={"/"} className="link">
              <li className="sidebarlistItem active">
                <LineStyle className="sidebaricon" />
                Home
              </li>
            </Link>
            <li className="sidebarlistItem">
              <Timeline className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarlistItem">
              <TrendingUp className="sidebaricon" />
              sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Quick Menu</h3>
          <ul className="sidebarlist">
            <Link to="/users" className="link">
              {" "}
              <li className="sidebarlistItem ">
                <PersonOutline className="sidebaricon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarlistItem">
                <LocalActivityOutlined className="sidebaricon" />
                Products
              </li>
            </Link>
            <li className="sidebarlistItem">
              <AttachMoney className="sidebaricon" />
              Transactions
            </li>
            <li className="sidebarlistItem">
              <AssessmentOutlined className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Notifiction</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistItem ">
              <EmailOutlined className="sidebaricon" />
              Mail
            </li>
            <li className="sidebarlistItem">
              <ChatOutlined className="sidebaricon" />
              Feedback
            </li>
            <li className="sidebarlistItem">
              <ChatBubbleOutlineOutlined className="sidebaricon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">staff</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistItem ">
              <WorkOutline className="sidebaricon" />
              Manage
            </li>
            <li className="sidebarlistItem">
              <Timeline className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarlistItem">
              <Report className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
