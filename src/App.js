import React from 'react';
import './App.css';
import { useWeb3, useWeb3Network, useEphemeralKey, useWeb3Injected } from '@openzeppelin/network/lib/react';
import Web3 from 'web3';
import {ethers} from 'ethers';

import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Web3Data from './components/pages/Web3Data/Web3Data.js';
import MetaMask from './components/pages/Web3Data/MetaMask';
import TokenSale from './components/pages/Web3Data/TokenSale.js';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/pages/Footer.js/Footer';

// const infuraProjectId = process.env.REACT_APP_INFURA_PROJECT_ID;
const infuraProjectId = '5745cb1c77d54ddcbd36d4788b1b621c';

function App() {
  
  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
 
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/web3data' component={Web3Data} />
        <Route path='/Data' component={MetaMask} />
        <Route path='/tokenSales' component={TokenSale} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;