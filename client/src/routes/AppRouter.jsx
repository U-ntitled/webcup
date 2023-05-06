import React from "react";
import { Route, Routes } from "react-router-dom";
//import AdminLayout from "../Layout/AdminLayout";
//import AuthLayout from "../Layout/AuthLayout";
//import UsersLayout from "../Layout/UsersLayout";
import Index from "../Pages";


function AppRouter(){
  return (
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="auth/*" element={<h1>Home Page</h1>}/>
        <Route path="users/*" element={<h1>Home Page</h1>}/>
    </Routes>
  )
}
export default AppRouter;