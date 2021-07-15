import React, { FC, Fragment } from 'react';
import Footer from '../components/PartyPlace/Footer';
import PrimaryHeader from '../components/PartyPlace/PrimaryHeader';
import SecondaryHeader from '../components/PartyPlace/SecondaryHeader';

const LayoutPartyPlace: FC = ({ children }) => {
  return (
    <Fragment>
      <div style={{ position: 'fixed', top: '0', width: '100vw', zIndex: 100 }}>
        <PrimaryHeader />
        <SecondaryHeader />
      </div>
      <div style={{ marginTop: '10rem' }}>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default LayoutPartyPlace;
