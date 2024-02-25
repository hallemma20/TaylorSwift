import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

import TaylorSwift from './Pages/TaylorSwift'
import Fearless from './Pages/Fearless'
import SpeakNow from './Pages/SpeakNow'
import Red from './Pages/Red'
import A1989 from './Pages/1989'
import Reputation from './Pages/Reputation'
import Lover from './Pages/Lover'
import Folklore from './Pages/Folklore';
import Evermore from './Pages/Evermore'
import Midnights from './Pages/Midnights'
import Footer from './Components/Footer';

const App: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Taylor Swift', path: '/Pages/TaylorSwift' },
    { name: 'Fearless', path: '/Pages/Fearless' },
    { name: 'Speak Now', path: '/Pages/SpeakNow' },
    { name: 'Red', path: '/Pages/Red' },
    { name: '1989', path: '/Pages/1989' },
    { name: 'Reputation', path: '/Pages/Reputation' },
    { name: 'Lover', path: '/Pages/Lover'},
    { name: 'Folklore', path: '/Pages/Folklore' },
    { name: 'Evermore', path: '/Pages/Evermore' },
    { name: 'Midnights', path: '/Pages/Midnights' },
    { name: 'Map', path: '/Pages/Map'},
  ];

  return (
    <div className="App">
      
      <Router>
        <Navbar navItems={navItems} />
        {/* <TestNav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/TaylorSwift" element={<TaylorSwift />} />
          <Route path="/Pages/Fearless" element={<Fearless />} />
          <Route path="/Pages/SpeakNow" element={<SpeakNow />} />
          <Route path="/Pages/Red" element={<Red />} />
          <Route path="/Pages/1989" element={<A1989 />} />
          <Route path="/Pages/Reputation" element={<Reputation />} />
          <Route path="/Pages/Lover" element={<Lover />} />
          <Route path="/Pages/Folklore" element={<Folklore />} />
          <Route path="/Pages/Evermore" element={<Evermore />} />
          <Route path="/Pages/Midnights" element={<Midnights />} />
          <Route path="/Pages/Map"/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
