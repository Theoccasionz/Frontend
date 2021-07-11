import React, { FC, useState, useRef, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRouter } from 'next/router';

import Singleparty from './singleparty';
import style from '../../styles/party-place/party-place.module.css';
import { fetchDesigns } from '../../server/design';

type Props = { heading: string; partyData?: any[] };

const PartyPlace: FC<Props> = ({ heading = 'Default' }) => {
  const [visible, setVisible] = useState(false);
  const filterRef = useRef<any>(null);
  const [allData, setAllData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  const [occasionFilter, setOccassionFilter] = useState('all');
  const [themeFilter, setThemeFilter] = useState('all');
  const [placeFilter, setPlaceFilter] = useState('all');
  const [budgetFilter, setBudgetFilter] = useState('all');

  const handleClick = () => {
    if (visible) {
      document.getElementById('filter-area')?.classList.remove(style.mobile);
      setVisible(false);
    } else {
      document.getElementById('filter-area')?.classList.add(style.mobile);
      setVisible(true);
    }
  };
  const router = useRouter();
  const getDesigns = async () => {
    let response = await fetchDesigns({
      theme: router.query.theme as string,
      occasion: router.query.occasion as string,
      place: router.query.place as string,
    });
    if (!response.error) {
      setAllData(response);
      setFilteredData(response);
    } else {
      // error handling hehre
    }
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      getDesigns();
    }
  }, [router]);

  useEffect(() => {
    let tempData = [...allData];
    if (occasionFilter !== 'all') {
      tempData = tempData.filter(el => el.Design_Occasion_Specialized === occasionFilter);
    }
    if (themeFilter !== 'all') {
      tempData = tempData.filter(el => el.Design_Theme === themeFilter);
    }
    if (placeFilter !== 'all') {
      tempData = tempData.filter(el => el.Design_Setup_Place === placeFilter);
    }
    if (budgetFilter !== 'all') {
      tempData = tempData.filter(el => el.Design_Price === budgetFilter);
    }
    setFilteredData(tempData);
  }, [occasionFilter, themeFilter, placeFilter, budgetFilter]);

  return (
    <main>
      <div className={style.responsive}>
        <h2 className={style.headingSmall}>{heading}</h2>
        <button className={style.filterButton} onClick={handleClick}>
          Filters
        </button>
      </div>
      <section className={style.filterArea} ref={filterRef} id="filter-area">
        <div>
          <label htmlFor="Occassion">Occassion</label>
          <select
            className={`${style.select} ${style.occassion}`}
            name="Occassion"
            onChange={e => setOccassionFilter(e.target.value)}
          >
            <option value="all">All</option>
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
            onChange={e => setThemeFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label htmlFor="Set Up Place">Set Up Place</label>
          <select
            className={`${style.select} ${style.place}`}
            name="Set Up Place"
            onChange={e => setPlaceFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label htmlFor="Budget">Budget</label>
          <select
            className={`${style.select} ${style.budget}`}
            name="Budget"
            onChange={e => setBudgetFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </section>

      <h2 className={style.headingLarge}>{heading}</h2>

      <Row>
        {filteredData.map((pdata: any, i: any) => (
          <Col lg={3} md={6} sm={12} key={`party-${i}`} className="mx-auto">
            <Singleparty data={pdata} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default PartyPlace;
