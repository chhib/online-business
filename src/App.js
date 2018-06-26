import React, { Component } from 'react';
import './App.css';

class Hero extends Component {
  render() {
    return (
      <div id="hero">
        <p id="tagline">Find the best, most trusted and creative web design agency</p>
        <ul id="usps">
          <li>Expert message</li>
	        <li>Authority message</li>
	        <li>Trustworthy message</li>
        </ul>
      </div>
    )
  }
}

class Agencies extends Component {
  render() {
    return (
      <div id="agencies">
        <h2>Most trusted agencies in Stockholm</h2>
        <p>We the brand asked for offers for our Sample Real Project and had an extra round of design fixes - that's our way of ranking these agencies.</p>
        <ul>
          <li>
            <h3>DevTips Agency</h3>
            <p>Very high quality agency. Expensive, but you can certainly trust them. Proactive and supreme. <a>Read full review.</a></p>
            <dl>
              <dt>Hourly rate:</dt>
              <dd>5,000 $</dd>
              <dt>Response time:</dt>
              <dd>Short</dd>
              <dt>Reviews:</dt>
              <dd>6 / 5</dd>
              <dt>Quality:</dt>
              <dd>High! Very!</dd>
            </dl>
          </li>
          <li>
            <h3>ShopetiShopEcomExperts</h3>
            <p>When you need something truly quick - and especially dirty - go for these guys.  <a>Read full review.</a></p>
            <dl>
              <dt>Hourly rate:</dt>
              <dd>50 $</dd>
              <dt>Response time:</dt>
              <dd>5 ms</dd>
              <dt>Reviews:</dt>
              <dd>2 / 5</dd>
              <dt>Quality:</dt>
              <dd>No.</dd>
            </dl>
          </li>
        </ul>
      </div>
    )
  }
}

class Information extends Component {
  render() {
    return (
      <div className="information">
        <h2>How do I find a good web design agency, that I can trust?</h2>
        <p>You need skill and luck, but especially Google. Because no one wants to show their prices, it's extremely difficult to compare.</p>
        <h2>What do other people think?</h2>
        <p>"This site is great for finding the best agencies!" -David</p>
        <h2>Reviews</h2>
        <p>See all reviews not just the most trusted agencies. Also find the worst ones!</p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>The Brand</h1>
          {/* <nav></nav> */}
        </header>
        <Hero/>
        <Agencies/>
        <Information/>
      </div>
    );
  }
}

export default App;
