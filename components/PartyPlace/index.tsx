import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Singleparty from './singleparty';

type Props = { heading: string; partyData: any[] };

const PartyPlace: FC<Props> = ({ heading = 'Default', partyData }) => {
  return (
    <main>
      <h2 className="text-center">{heading}</h2>
      <Row>
        {partyData.map((pdata, i) => (
          <Col lg={3} md={6} sm={12} key={`party-${i}`} className="mx-auto">
            <Singleparty data={pdata} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default PartyPlace;
