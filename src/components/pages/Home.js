import React from 'react';
import '../../App.css'
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import CardApp from "../Cardapp";



function Home() {
    return (
            <div>
              <HeroSection />
              <CardApp/>
              <Footer />

            </div>
    );
}
export default Home;