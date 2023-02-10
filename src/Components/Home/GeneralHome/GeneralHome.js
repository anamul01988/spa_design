import React from 'react'
import Earth from './Earth';
import Environment from './Environment';
import GeneralHomeBanner from './GeneralHomeBanner';
import image from './asset/bg.png';
function GeneralHome() {
  return (
    <div>
      <GeneralHomeBanner />
      <Earth/>
      <Environment image={image}/> 
    </div>
  );
}

export default GeneralHome