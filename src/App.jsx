import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from './Pages/Menu/MenuPage';
import HomePage from './Pages/Home/HomePage';
import ReservationPage from './Pages/Reservation/ReservationPage';
import GalleryPage from './Pages/Gallery/GalleryPage';



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
