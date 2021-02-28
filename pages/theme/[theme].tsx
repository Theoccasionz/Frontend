import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';
import SkeletonCard from '../../components/Skeleton/SkeletonCard';
import { fetchThemeData } from '../../server/theme';
import ThemePartyCard from '../../components/Cards/ThemePartyCard';

const ThemePage: FC = () => {
  const responsive = { 568: { items: 1 } };
  const router = useRouter();
  const [parties, setParties] = useState([]);

  useEffect(() => {
    if (router.asPath !== router.route) {
      getThemePageData();
    }
  }, [router]);

  const getThemePageData = async () => {
    let response = await fetchThemeData(router.query.theme as string);
    if (!response.error) {
      setParties(response);
    } else {
      // error handling here
    }
  };

  return (
    <Layout>
      <h2 className="text-center">{router.query?.theme || 'Loading ..'}</h2>
      <Carousel items={[]} responsive={responsive} />
      <Row className="mt-4">
        {parties.length > 0
          ? parties.map(p => (
            //@ts-ignore
              <Col key={p.Party_Id} lg={4} md={12} className="mx-auto">
                <ThemePartyCard data={p} />
              </Col>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map(d => (
              <Col key={d} lg={4} md={12} className="mx-auto">
                <SkeletonCard heading={true} />
              </Col>
            ))}
      </Row>
    </Layout>
  );
};

export default ThemePage;
