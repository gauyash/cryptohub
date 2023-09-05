import { Route, Routes } from "react-router-dom"
import MainLayout from "./Components/Layout/MainLayout"
import Home from "./Pages/Home"
import CryptoCurrencies from "./Pages/CryptoCurrencies"
import News from "./Pages/News"
import CryptoDetails from "./Pages/CryptoDetails"
import React, { useState, useEffect } from "react";
function App() {
  const [isToggle, setIsToggle] = useState(false);
  function handleToggle() {
    setIsToggle((prevToggleState) => !prevToggleState);
  }


  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout isToggle={isToggle} handleToggle={handleToggle} />}>
        <Route index element={<Home setIsToggle={setIsToggle} />}/>
        <Route path="cryptocurrencies" element={<CryptoCurrencies  setIsToggle={setIsToggle} />}/>
        <Route path="cryptocurrencies/:id" element={<CryptoDetails />}/>
        <Route path="news" element={<News  setIsToggle={setIsToggle} />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
