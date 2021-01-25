import { FC } from 'react';

import Layout from '../components/Layout';
import SkeletonFeatured from '../components/Skeleton/SkeletonFeatured';
import PartyNav from '../components/Nav';
import Carousel from '../components/Carousel';

const Index: FC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Index;
