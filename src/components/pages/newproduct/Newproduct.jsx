import React from "react";
import "./newproduct.scss";

export default function Newproduct() {
  return (
    <div className="newproduct">
      <h1 className="addproductTitle">New Product</h1>
      <form className="addproductForm">
        <div className="addproductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addproductItem">
          <label>Name</label>
          <input type="text" placeholder="Oneplus" />
        </div>
        <div className="addproductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addproductItem">
          <label>Active</label>
          <select name="active" id="active" className="addproductSelect">
            <option value="yes">Yes</option>
            <option value="no">NO</option>
          </select>
        </div>
        <button className="addproductButton">Create</button>
      </form>
    </div>
  );
}
