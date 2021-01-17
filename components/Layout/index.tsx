import React from 'react';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
