import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useWeb3, useWeb3Network, useEphemeralKey, useWeb3Injected } from '@openzeppelin/network/lib/react';


function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/5745cb1c77d54ddcbd36d4788b1b621c`);
  const { lib: web3, networkId, accounts, providerName } = web3Context;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const requestAuth = async web3Context => {
    try {
      await web3Context.requestAuth();
    } catch (e) {
      console.error(e);
    }
  };
  const requestAccess = useCallback(() => requestAuth(web3Context), []);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
      // window.removeEventListener('resize', showButton)
    }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
              DYCLUDE
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}> Services </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-btn'>
                {!!networkId && providerName !== 'infura' ? (
                  <Link to='/web3data' className='btn-link'>
                    <Button buttonStyle='btn--outline' onClick={requestAccess}>Connect Wallet</Button>
                  </Link>
                ) : (
                  <Link to='/web3data' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={requestAccess}
                    >
                      Connect Wallet
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
