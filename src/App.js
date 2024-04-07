import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./components/pages/home/Home.jsx";

import Topbar from "./components/topbar/Topbar.jsx";
import Userlist from "./components/pages/userList/Userlist.jsx";
import User from "./components/pages/user/User.jsx";
import Newuser from "./components/pages/newUser/Newuser.jsx";
import Productlist from "./components/pages/productlist/Productlist.jsx";
import Product from "./components/pages/product/Product.jsx";
import Newproduct from "./components/pages/newproduct/Newproduct.jsx";

function App() {
  return (
    <BrowserRouter className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Userlist />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<Newuser />} />
          <Route path="/products" element={<Productlist />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<Newproduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
