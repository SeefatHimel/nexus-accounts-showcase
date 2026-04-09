import { AccountListings } from '../components/AccountListings'
import { Contact } from '../components/Contact'
import { GamePitch } from '../components/GamePitch'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'

export function HomePage() {
  return (
    <main>
      <Hero />
      <GamePitch />
      <AccountListings />
      <HowItWorks />
      <Contact />
    </main>
  )
}
