import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Filters, { Filter } from '../Filters';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState<Filter>({
    date: '',
    age: '',
    budget: '',
    location: '',
  });
  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Filters filters={filters} updateFilters={setFilters} />
        {children}
      </Container>
    </React.Fragment>
  );
};

export default Layout;
