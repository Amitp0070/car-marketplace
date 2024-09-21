// import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchCar from './components/MostSearchCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
// import { Button } from './components/ui/button'

function Home() {
  return (
    <div>
      {/* Header */}
     <Header/>
      {/* Hero */}
      <Hero/>
      {/* Category */}
      <Category/>
      {/* Most Search Car */}
      <MostSearchCar/>
      {/* InfoSection */}
      <InfoSection/>
      {/* Footer  */}
      <Footer/>
    </div>
  )
}

export default Home
