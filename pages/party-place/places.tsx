import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PartyPlace from '../../components/PartyPlace';
import { fetchDesigns } from '../../server/design';
import LayoutPartyPlace from '../../layouts/party-place';

const PartyPlaceTheme = () => {
  const router = useRouter();

  const [designData, setDesignData] = useState([]);

  const getDesigns = async () => {
    
    let response = await fetchDesigns({
      theme: router.query.theme as string,
      occasion: router.query.occasion as string,
      place: router.query.place as string,
    });
    if (!response.error) {
      console.log('res is', response);
      setDesignData(response);
    } else {
      // error handling hehre
    }
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      getDesigns();
    }
  }, [router]);
  return (
    <LayoutPartyPlace>
      <PartyPlace
        heading={
          (router.query.theme as string) ||
          (router.query.occasion as string) ||
          (router.query.place as string)
        }
        partyData={designData}
      />
    </LayoutPartyPlace>
  );
};

export default PartyPlaceTheme;
