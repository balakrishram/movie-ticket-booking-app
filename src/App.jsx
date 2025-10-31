import { Fragment } from "react"
import { Routes,Route, useLocation } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { Movies } from "./pages/Movies"
import { MoviesDetails } from "./pages/MovieDetails"
import { MyBookings } from './pages/MyBookings'
import { Favorites } from "./pages/Favorites"
import { SeatLayout } from "./pages/SeatLayout"
import { NavBar } from './components/NavBar'
import { Toaster } from "react-hot-toast"
import { Footer } from './components/Footer'
function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <Fragment>
      <Toaster/>
      {!isAdminRoute && <NavBar/>}
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/movies/:id" element={<MoviesDetails/>}></Route>
        <Route path="/movies/:id/:date" element={<SeatLayout/>}></Route>
        <Route path="/my-bookings" element={<MyBookings/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
      {!isAdminRoute && <Footer/>}
    </Fragment>
  )
}

export default App
