import React, { FC, Fragment, useState, useEffect } from 'react';
import Footer from '../components/PartyPlace/Footer';
import PrimaryHeader from '../components/PartyPlace/PrimaryHeader';
import SecondaryHeader from '../components/PartyPlace/SecondaryHeader';

const LayoutPartyPlace: FC = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <Fragment>
      <div id="main"></div>
      <div style={{ position: 'fixed', top: '0', width: '100vw', zIndex: 100 }}>
        <PrimaryHeader />
        <SecondaryHeader />
      </div>
      <div style={{ marginTop: '10rem' }}>{children}</div>
      {visible && (
        <a href="#main" className="scroll-up">
          ^
        </a>
      )}
      <Footer />
    </Fragment>
  );
};

export default LayoutPartyPlace;
