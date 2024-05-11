import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/home"
import Catalog from "./Components/catalog"
import Collection from "./Components/collections"
import Login from "./Components/login"
import News from  "./Components/news"
import NotFound from "./Components/notFound"
import Profile from "./Components/profile"
import Setting from "./Components/settings"


function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/catalog" element={<Catalog/>}></Route>
          <Route exact path="/collection" element={<Collection/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/news" element={<News/>}></Route>
          <Route exact path="/profile" element={<Profile/>}></Route>
          <Route exact path="/settings" element={<Setting/>}></Route>
          <Route element={<NotFound/>}></Route>
        </Routes>
    </Router>
  )
}
export default App