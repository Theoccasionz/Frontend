import { FC } from 'react';
import Layout from '../components/Layout';
import PartyNav from '../components/Nav';
import PartyPlace from '../components/Nav/party_place';

const PartyTown: FC = () => {
  return (
    <Layout>
      <PartyNav />
      <PartyPlace />
    </Layout>
  );
};

export default PartyTown;
