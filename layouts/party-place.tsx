import React, { FC, Fragment } from 'react';
import Footer from '../components/PartyPlace/Footer';
import PrimaryHeader from '../components/PartyPlace/PrimaryHeader';
import SecondaryHeader from '../components/PartyPlace/SecondaryHeader';

const LayoutPartyPlace: FC = ({ children }) => {
  return (
    <Fragment>
      <PrimaryHeader />
      <SecondaryHeader />
      {children}
      <Footer />
    </Fragment>
  );
};

export default LayoutPartyPlace;
