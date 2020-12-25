import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
//import Web3Data from './Web3Data.js';
import Pricing from '../../Pricing';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
     
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
