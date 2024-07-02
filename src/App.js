import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Rents from "./pages/Rents";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/rents" Component={Rents} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/contact" Component={Contact} />
        <Route path="/favorites" Component={Favorites} />
        <Route path="/forgot-password" Component={ForgotPassword} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;