import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from './Pages/Menu/MenuPage';
import HomePage from './Pages/Home/HomePage';



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
