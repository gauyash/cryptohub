import { Route, Routes } from "react-router-dom"
import MainLayout from "./Components/Layout/MainLayout"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={}/> */}
      </Route>
    </Routes>
    </>
  )
}

export default App
