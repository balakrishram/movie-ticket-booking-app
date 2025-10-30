import { Fragment } from "react"
import { Routes,Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/movies" element={<HomePage/>}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
