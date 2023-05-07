import React from "react";
import { Route, Routes } from "react-router-dom";
import { Conversation } from "../featurs/Acceuille";
import Index from "../Pages";
import AuthPage from "../Pages/AuthPage";


function AppRouter(){
  return (
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="auth/*" element={<AuthPage/>}/>
        <Route path="conversation/*" element={<Conversation/>}/>
    </Routes>
  )
}
export default AppRouter;