import { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export interface Filter {
  date?: string;
  age?: string;
  budget?: string;
  location?: string;
}

interface Props {
  filters: Filter;
  updateFilters: Dispatch<SetStateAction<Filter>>;
}

const Filters: FC<Props> = ({ filters, updateFilters }) => {
  const { date, age, budget, location } = filters;
  const handleChange = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
    updateFilters({ ...filters, [name]: e.target.value });
  };

  return (
    <Form className="my-3">
      <Row className="align-items-center">
        <Col md={12} lg={2}>
          <h3>Filters</h3>
        </Col>
        <Col xs={12} sm={6} md={3} lg={2}>
          <Form.Label htmlFor="dateInput">Date</Form.Label>
          <Form.Control
            value={date}
            id="dateInput"
            placeholder="Location"
            onChange={handleChange('date')}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={2}>
          <Form.Label htmlFor="ageInput">Age Group</Form.Label>
          <Form.Control
            value={age}
            id="ageInput"
            placeholder="Age Group"
            onChange={handleChange('age')}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={2}>
          <Form.Label htmlFor="budgetInput">Budget</Form.Label>
          <Form.Control
            value={budget}
            id="budgetInput"
            placeholder="budget"
            onChange={handleChange('budget')}
          />
        </Col>
        <Col xs={12} sm={6} md={3} lg={2}>
          <Form.Label htmlFor="locationInput">Location</Form.Label>
          <Form.Control
            value={location}
            id="locationInput"
            placeholder="Location"
            onChange={handleChange('location')}
          />
        </Col>
        <Col xs="auto" lg={2}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Filters;
