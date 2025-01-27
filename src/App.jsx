import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OurTeam from './components/team/OurTeam'
import DonateUs from './components/DonateUs'
import NewsArticles from './components/NewsAtricles'
// import WhoWeAre from './components/WhoWeAre'
function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <OurTeam />
      <DonateUs />
      <NewsArticles />
      {/* <WhoWeAre /> */}
    </>
  )
}

export default App
