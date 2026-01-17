import './App.css'
import BlogSection from './components/BlogSection/BlogSection'
import DiscoverSection from './components/DiscoverSection/DiscoverSection'
import EventsSection from './components/EventsSection/EventsSection'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'
import MenuSection from './components/MenuSection/MenuSection'
import ReservationSection from './components/ReservationSection/ReservationSection'
import WelcomeSection from './components/WelcomeSection/WelcomSection'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <DiscoverSection />
      <FeaturesSection />
      <MenuSection />
      <EventsSection />
      <ReservationSection />
      <BlogSection />
      <Footer />
    </>
  )
}

export default App
