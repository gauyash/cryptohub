import { Route, Routes } from "react-router-dom"
import MainLayout from "./Components/Layout/MainLayout"
import Home from "./Pages/Home"
import CryptoCurrencies from "./Pages/CryptoCurrencies"
import News from "./Pages/News"
import './styles/global.scss'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path="cryptocurrencies" element={<CryptoCurrencies />}/>
        <Route path="news" element={<News />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
