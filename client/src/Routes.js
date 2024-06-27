/* eslint-disable no-unused-vars */
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Signin from "./user/Signin"
import Signup from "./user/Signup"
import Home from "./core/Home"
import Layout from "./core/Layout"
import PrivateRoute from "./auth/PrivateRoute"
import UserDashboard from "./user/UserDashboard"
import AdminRoute from "./auth/AdminRoute"
import AdminDashboard from "./user/AdminDashboard"
import AddCategory from "./admin/AddCategory"
import AddProduct from "./admin/AddProduct"
import Shop from "./core/Shop"
import Product from "./core/Product"
import Cart from "./core/Cart"
import Order from "./admin/Order"
import Profile from "./user/Profile"
import ManageProducts from "./admin/ManageProducts"
import UpdateProduct from "./admin/UpdateProduct"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/product/:productId" exact component={Product} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <PrivateRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/admin/orders" exact component={Order} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
