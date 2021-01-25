import { FC, useState } from 'react';
import Container from 'react-bootstrap/Container';

import Filters, { Filter } from '../components/Filters';
import Layout from '../components/Layout';
import SkeletonFeatured from '../components/Skeleton/SkeletonFeatured';
import PartyNav from '../components/Nav';
import Carousel from '../components/Carousel';

const Index: FC = () => {
  const [filters, setFilters] = useState<Filter>({
    date: '',
    age: '',
    budget: '',
    location: '',
  });

  return (
    <Layout>
      <Container fluid>
        <Filters filters={filters} updateFilters={setFilters} />
        <div>
          <PartyNav />
        </div>

        <h1>Party Themes</h1>
        <Carousel />

        <h1>DJ in your Town</h1>
        <Carousel />

        <h1>Popular Parties</h1>
        <SkeletonFeatured />

        <h1>Party Special</h1>
        <Carousel />
      </Container>
    </Layout>
  );
};

export default Index;
