import React from 'react'
// import Features from './Features';
import GeneralDashboard from './GeneralDashboard';
import GeneralFeatures from './GeneralFeatures';
import GeneralFooter from './GeneralFooter';
import GeneralHomeBanner from './GeneralHomeBanner';
import GeneralPlatform from './GeneralPlatform';
import GeneralTeams from './GeneralTeams';
// import Home from '../Home/Home'
// import Features from './../pageComponents/Features/Features';

function GeneralHome() {
  return (
    <div>
      <GeneralHomeBanner />
      {/* <GeneralFeatures />
      <GeneralDashboard />
      <GeneralPlatform/>
      <GeneralTeams /> */}
      <GeneralFooter/>
    </div>
  );
}

export default GeneralHome