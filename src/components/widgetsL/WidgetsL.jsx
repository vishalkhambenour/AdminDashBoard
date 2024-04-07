import React from "react";
import "./widgitsL.scss";

export default function WidgetsL() {
  const Button = ({ type }) => {
    return <button className={"widgetsLButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetsL">
      <h3 className="widgetsLTitle"> Latest Transactions</h3>
      <table className="widgetsLTable">
        <tr className="widgetsLTr">
          <th className="widgetsLTh">Customer</th>
          <th className="widgetsLTh">Date</th>
          <th className="widgetsLTh">Amount</th>
          <th className="widgetsLTh">Status</th>
        </tr>
        <tr className="widgetsLTr">
          <td className="widgetsLuser">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/429/293/desktop-wallpaper-coque-et-etui-iphone-luffy-smiling-zoro-aesthetic-ps4-thumbnail.jpg"
              alt=""
              className="widgetsLImg"
            />
            <span className="widgetsLName">Susan Carol</span>
          </td>
          <td className="widgetsLDate">5 apr 2024</td>
          <td className="widgetsLAmount">$10</td>
          <td className="widgetsLStatus">
            <Button type={"Approved"} />
          </td>
        </tr>
        <tr className="widgetsLTr">
          <td className="widgetsLuser">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/429/293/desktop-wallpaper-coque-et-etui-iphone-luffy-smiling-zoro-aesthetic-ps4-thumbnail.jpg"
              alt=""
              className="widgetsLImg"
            />
            <span className="widgetsLName">Susan Carol</span>
          </td>
          <td className="widgetsLDate">5 apr 2024</td>
          <td className="widgetsLAmount">$10</td>
          <td className="widgetsLStatus">
            <Button type={"Declined"} />
          </td>
        </tr>
        <tr className="widgetsLTr">
          <td className="widgetsLuser">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/429/293/desktop-wallpaper-coque-et-etui-iphone-luffy-smiling-zoro-aesthetic-ps4-thumbnail.jpg"
              alt=""
              className="widgetsLImg"
            />
            <span className="widgetsLName">Susan Carol</span>
          </td>
          <td className="widgetsLDate">5 apr 2024</td>
          <td className="widgetsLAmount">$10</td>
          <td className="widgetsLStatus">
            <Button type={"Pending"} />
          </td>
        </tr>
        <tr className="widgetsLTr">
          <td className="widgetsLuser">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/429/293/desktop-wallpaper-coque-et-etui-iphone-luffy-smiling-zoro-aesthetic-ps4-thumbnail.jpg"
              alt=""
              className="widgetsLImg"
            />
            <span className="widgetsLName">Susan Carol</span>
          </td>
          <td className="widgetsLDate">5 apr 2024</td>
          <td className="widgetsLAmount">$10</td>
          <td className="widgetsLStatus">
            <Button type={"Approved"} />
          </td>
        </tr>
      </table>
    </div>
  );
}
