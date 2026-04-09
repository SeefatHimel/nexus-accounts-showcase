import { AccountListings } from './components/AccountListings'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { GamePitch } from './components/GamePitch'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GamePitch />
        <AccountListings />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
