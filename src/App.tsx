import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {Layout} from "./Layouts";
import NotFoundPage from "./component/notfoundpage";
import {Productlist} from './modules/productLists/productlist'
import { ProductDetail } from "./modules/productDetail/productDetail";
import { Addproduct } from "./modules/addproduct/addproduct";
import { CartList } from "./modules/cartList/cartList";

export const App = () => {
  
  return (
    <>
      <div>
        <Routes>

          <Route element={<Layout></Layout>}>
            <Route path ="/*" element={<Productlist/>}/>
            <Route path="/products" element={<Productlist/>} />
            <Route path="/products/:id" element={<ProductDetail/>} />
            <Route path="/addproduct" element={<Addproduct/>} />
            <Route path="/cart" element={<CartList/>} />
          </Route>

          {/* <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route> */}
        </Routes>
      </div>
    </>
  );
};

export default App;