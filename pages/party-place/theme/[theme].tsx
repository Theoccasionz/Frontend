import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Container from 'react-bootstrap/Container';
import PartyPlace from '../../../components/PartyPlace';
import { fetchDesigns } from '../../../server/design';

const PartyPlaceTheme = () => {
  const router = useRouter();

  const [designData, setDesignData] = useState([]);

  const getDesigns = async () => {
    let response = await fetchDesigns({ theme: router.query.theme as string });
    if (!response.error) {
      setDesignData(response);
    } else {
      // error handling hehre
    }
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      const theme = router.query.theme;
      getDesigns();
    }
  }, [router]);
  return (
    <Fragment>
      <Header />
      <Container fluid>
        <PartyPlace heading="new" partyData={designData} />
      </Container>
    </Fragment>
  );
};

export default PartyPlaceTheme;
