import React, { useState, createContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import NotFound from "./NotFound";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import AdminUpdateProduct from "./AdminUpdateProduct";
import Profile from "./Profile";
import SingleProduct from "./SingleProduct";
import Product from "./Product";
import CategoryProduct from "./CategoryProduct";
import Notification from "./Notification";
import Reset from "./Reset";
import ForgotPassword from "./ForgotPassword";
import Chat from "./Chat";
import Faq from "./Faq";
import Terms from "./Terms";
import AboutUs from "./AboutUs";
import { initialState, reducer } from "../helpers/productReducer";
import ProtectedRoute from "./ProtectedRoute";
import { isAuthenticated } from "../helpers/auth";
import { Thankyou } from "./Thankyou";

export const ProductContext = createContext();

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [notification, setNotification] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header setSelectedChat={setSelectedChat} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/verifyAccount/:token" element={<Thankyou />} />
            <Route
              path="/user/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute isAdmin={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/products" element={<Product />} />
            <Route
              path="/singleproduct/:productId"
              element={<SingleProduct setSelectedChat={setSelectedChat} />}
            />
            <Route
              path="/category/:categoryName"
              element={<CategoryProduct />}
            />
            <Route
              path="/admin/product/update/:productId"
              element={
                <ProtectedRoute>
                  <AdminUpdateProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <Notification />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/reset/:token" element={<ForgotPassword />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat
                    selectedChat={selectedChat}
                    setSelectedChat={setSelectedChat}
                    notification={notification}
                    setNotification={setNotification}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ProductContext.Provider>
  );
};

export default App;

