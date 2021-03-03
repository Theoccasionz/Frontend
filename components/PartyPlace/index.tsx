import React, { FC, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Singleparty from './singleparty';

type Props = { heading: string; partyData: any[] };

const PartyPlace: FC<Props> = ({ heading = 'Default', partyData }) => {
  const [filters, setFilters] = useState({
    occasion: '',
    themebase: '',
    setupPlace: '',
    budget: '',
    ageGroup: '',
  });
  return (
    <main>
      <h2 className="text-center">{heading}</h2>
      <Form>
        <Form.Row className="align-items-center">
          <Form.Group as={Col} md="4" lg="2" sm="12">
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              Occasion
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" lg="2" sm="12">
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              Theme Base
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" lg="2" sm="12">
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              Set up Place
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" lg="2" sm="12">
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              Budget
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" lg="2" sm="12">
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              Age group
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" lg="2" sm="12" className="text-center">
            <Button type="submit" className="my-1">
              Filter
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
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
