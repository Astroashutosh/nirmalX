import React from 'react'
import Hero from "../components/layout/Hero";
import Slider from '../components/layout/FeatureSlider';

function Home() {
  return (
   <>
   <Hero/>
<section className="about-section" id="about">
  <div className="container">
    <div className="about-card">
      <h2>About NirmalX (NRX)</h2>
      <p className="highlight-text">“To create a transparent and decentralised ecosystem for future finance.”</p>
      <div className="overview">
        <p><strong>NRX</strong> is a fully decentralized <strong>BEP-20</strong> token designed for trust, transparency, and long-term growth.</p>
        <p>A project built to protect investors from manipulation and uncertainty.</p>
        <p><strong>No central control</strong> – only smart contract logic.</p>
        <p>Our ecosystem is built to prove that genuine crypto can create real wealth.</p>
      </div>
      <div className="content">
        <p><strong>Vision:</strong> To build a transparent, community-owned digital ecosystem. To promote long-term token sustainability and value stability. To create a benchmark model of ethical crypto governance.</p>
        <p><strong>Mission:</strong> Empowering community with secure, scalable, and transparent crypto solutions.</p>
      </div>
    </div>
  </div>
</section>


<Slider/>

   </>
  )
}

export default Home