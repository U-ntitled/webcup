import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../context/GlobalContext";
import { Conversation } from "../featurs/Acceuille";
import Index from "../Pages";
import AuthPage from "../Pages/AuthPage";


function AppRouter(){
  const {connected} = useContext(AuthContext)
  return (
    <Routes>
        <Route path="/" element={connected ? <Conversation/>  : <Index/>} />
        <Route path="auth/*" element={<AuthPage/>}/>
        {
          connected &&  (
            <Route path="conversation/*" element={<Conversation/>}/>
          )
        }
    </Routes>
  )
}
export default AppRouter;