import React from 'react'
import Analytics from '../components/Analytics';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import CardsSection from '../components/CardsSection';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <CardsSection/>
        <Footer/>
    </div>
  )
}

export default MainPage