import React from 'react';
import Container from 'react-bootstrap/Container';

import Layout from '../components/Layout';
import List from '../components/List';
import SkeletonFeatured from '../components/Skeleton/SkeletonFeatured';

const Index: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <h1>Party Themes</h1>
        <List data={[1, 2, 3, 4, 5]} heading={true} />

        <h1>DJ in your Town</h1>
        <List data={[1, 2, 3, 4, 5]} />

        <h1>Popular Parties</h1>
        <SkeletonFeatured />

        <h1>Party Special</h1>
        <List data={[1, 2, 3, 4, 5]} heading={true} />
      </Container>
    </Layout>
  );
};

export default Index;
