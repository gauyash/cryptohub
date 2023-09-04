import { Route, Routes } from "react-router-dom"
import MainLayout from "./Components/Layout/MainLayout"
import Home from "./Pages/Home"
import CryptoCurrencies from "./Pages/CryptoCurrencies"
import News from "./Pages/News"
import CryptoDetails from "./Pages/CryptoDetails"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path="cryptocurrencies" element={<CryptoCurrencies />}/>
        <Route path="cryptocurrencies/:id" element={<CryptoDetails />}/>
        <Route path="news" element={<News />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
