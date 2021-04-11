import React, { FC, useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Singleparty from './singleparty';
import style from '../../styles/party-place/party-place.module.css';

type Props = { heading: string; partyData: any[] };

const PartyPlace: FC<Props> = ({ heading = 'Default', partyData }) => {
  const [visible, setVisible] = useState(false);
  const filterRef = useRef();

  const handleClick = () => {
    if (visible) {
      filterRef.current.style.display = 'none';
      setVisible(false);
    } else {
      filterRef.current.style.display = 'block';
      setVisible(true);
    }
  };
  return (
    <main>
      <div className={style.responsive}>
        <h2 className={style.headingSmall}>{heading}</h2>
        <button className={style.filterButton} onClick={handleClick}>
          Filters
        </button>
      </div>
      <section className={style.filterArea} ref={filterRef}>
        <div>
          <label htmlFor="Occassion">Occassion</label>
          <select className={`${style.select} ${style.occassion}`} name="Occassion">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label htmlFor="Theme">Theme</label>
          <select
            className={`${style.select} ${style.theme}`}
            name="Theme"
            onChange={() => console.log('Hello')}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label htmlFor="Set Up Place">Set Up Place</label>
          <select className={`${style.select} ${style.place}`} name="Set Up Place">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label htmlFor="Budget">Budget</label>
          <select className={`${style.select} ${style.budget}`} name="Budget">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </section>

      <h2 className={style.headingLarge}>{heading}</h2>

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
