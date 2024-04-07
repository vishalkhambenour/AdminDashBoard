import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import Chart from "../../../components/chart/Chart";
import { productData } from "../../dummydata";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="producTitleContainer">
        <h1 className="prodctTitle">Product</h1>
        <Link to="/newproduct">
          <button className="prooductAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="producttopleft">
          <Chart
            data={productData}
            datakey={"Sales"}
            title={"Sales Performance"}
          />
        </div>
        <div className="producttopRight">
          <div className="productInfoTop">
            <img
              src="https://www.digitaltrends.com/wp-content/uploads/2019/10/oneplus-7t-pro-mclaren-edition-camera.jpg?p=1"
              alt=""
              className="productinfoImg"
            />
            <span className="productName">Oneplus</span>
          </div>
          <div className="productInfoBottom">
            <div className="productinfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfovalue">123</span>
            </div>
            <div className="productinfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfovalue">144423</span>
            </div>
            <div className="productinfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfovalue">yes</span>
            </div>
            <div className="productinfoItem">
              <span className="productInfoKey">Instock:</span>
              <span className="productInfovalue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productformLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Oneplus" />
            <label>In Stock</label>
            <select name="inStock" id="idStocks">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="idactive">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="productformRight">
            <div className="productupload">
              <img
                src="https://www.digitaltrends.com/wp-content/uploads/2019/10/oneplus-7t-pro-mclaren-edition-camera.jpg?p=1"
                alt=""
                className="productuploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productbutton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
