import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Container from 'react-bootstrap/Container';
import PartyPlace from '../../../components/PartyPlace';
import { fetchDesigns } from '../../../server/design';

const PartyPlaceOccasion = () => {
  const router = useRouter();

  const [designData, setDesignData] = useState([]);

  const getDesigns = async () => {
    let response = await fetchDesigns({ occasion: router.query.occasion as string });
    if (!response.error) {
      setDesignData(response);
    } else {
      // error handling hehre
    }
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      const occasion = router.query.occasion;
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

export default PartyPlaceOccasion;
