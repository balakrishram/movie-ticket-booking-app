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
import { Layout } from "./pages/admin/Layout"
import { AddShows } from "./pages/admin/AddShows"
import { ListBookings } from "./pages/admin/ListBookings"
import { Dashboard } from "./pages/admin/Dashboard"
import { ListShows } from "./pages/admin/ListShows"
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
        <Route path="/admin/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path="add-shows" element={<AddShows />}/>
          <Route path="list-shows" element={<ListShows />}/>
          <Route path="list-bookings" element={<ListBookings />}/>
        </Route>
      </Routes>
      {!isAdminRoute && <Footer/>}
    </Fragment>
  )
}

export default App
