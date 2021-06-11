import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import { getDesigns } from '../../../server/admin';

import 'rsuite-table/dist/css/rsuite-table.css';
import style from '../../../styles/admin/listed-design.module.css';

const ListedDesign = () => {
  const fetchBookings = async () => {
    try {
      let response = await getDesigns();
      // console.log(response);
      if (response.error) {
        throw new Error(response.error);
      }
      setData(response);
      setFilteredData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [occasionFilter, setOccasionFilter] = useState('all');
  const [setupPlaceFilter, setSetupPlaceFilter] = useState('all');
  const [themeBaseFilter, setThemeBaseFilter] = useState('all');
  const [setupDurationFilter, setSetupDurationFilter] = useState('all');
  const [designIDFilter, setDesignIdFiter] = useState('all');
  const [vendorIdFilter, setVendorIdFilter] = useState('all');

  const renderOptions = (data: any, field: string) => {
    let options: any[] = [];
    data.forEach((element: any) => {
      let found = options.some(el => el === element[field]);
      if (!found) {
        options.push(element[field]);
      }
    });
    return options.map((opt: any, i: any) => (
      //@ts-ignore
      <option value={opt} key={`${opt}-${i}`}>
        {opt}
      </option>
    ));
  };

  useEffect(() => {
    let changeData = [...data];
    if (designIDFilter !== 'all') {
      changeData = changeData.filter((el: any) => el.Design_Id.toString() === designIDFilter.toString());
    }
    if (vendorIdFilter !== 'all') {
      changeData = changeData.filter((el: any) => el.Vendor_Id.toString() === vendorIdFilter.toString());
    }
    if (themeBaseFilter !== 'all') {
      changeData = changeData.filter((el: any) => el.Design_Theme === themeBaseFilter);
    }
    if (setupPlaceFilter !== 'all') {
      changeData = changeData.filter((el: any) => el.Design_Setup_Place === setupPlaceFilter);
    }
    if (setupDurationFilter !== 'all') {
      changeData = changeData.filter((el: any) => el.Design_Setup_Duration === setupDurationFilter);
    }
    if (occasionFilter !== 'all') {
      changeData = changeData.filter(
        (el: any) => el.Design_Occasion_Specialized === occasionFilter
      );
    }
    console.log(changeData);
    setFilteredData(changeData);
  }, [
    themeBaseFilter,
    designIDFilter,
    vendorIdFilter,
    setupDurationFilter,
    setupPlaceFilter,
    occasionFilter,
  ]);

  return (
    <main className="mt-3">
      <section className={style.filters}>
        <div>
          <label htmlFor="Occassion">Occassion</label>
          <select className={``} name="Occassion" onChange={e => setOccasionFilter(e.target.value)}>
            <option value="all">All</option>
            {renderOptions(data, 'Design_Occasion_Specialized')}
          </select>
        </div>

        <div>
          <label htmlFor="SetupPlace">SetupPlace</label>
          <select
            className={``}
            name="SetupPlace"
            onChange={e => setSetupPlaceFilter(e.target.value)}
          >
            <option value="all">All</option>
            {renderOptions(data, 'Design_Setup_Place')}
          </select>
        </div>

        <div>
          <label htmlFor="ThemeBase">ThemeBase</label>
          <select
            className={``}
            name="ThemeBase"
            onChange={e => setThemeBaseFilter(e.target.value)}
          >
            <option value="all">All</option>
            {renderOptions(data, 'Design_Theme')}
          </select>
        </div>

        <div>
          <label htmlFor="Budget">Budget</label>
          <select className={``} name="Budget">
            <option value="all">All</option>
          </select>
        </div>

        <div>
          <label htmlFor="SetupTime">SetupDuration</label>
          <select
            className={``}
            name="SetupTime"
            onChange={e => setSetupDurationFilter(e.target.value)}
          >
            <option value="all">All</option>
            {renderOptions(data, 'Design_Setup_Duration')}
          </select>
        </div>

        <div>
          <label htmlFor="DesignID">Design ID</label>
          <select className={``} name="DesignID" onChange={e => setDesignIdFiter(e.target.value)}>
            <option value="all">All</option>
            {renderOptions(data, 'Design_Id')}
          </select>
        </div>

        <div>
          <label htmlFor="VendorID">Vendor ID</label>
          <select className={``} name="VendorID" onChange={e => setVendorIdFilter(e.target.value)}>
            <option value="all">All</option>
            {renderOptions(data, 'Vendor_Id')}
          </select>
        </div>
      </section>
      <section className={`mt-4`}>
        <Table data={filteredData} height={300}>
          <Column width={200} align="center" fixed resizable>
            <HeaderCell>Design Name</HeaderCell>
            <Cell dataKey="Design_Name" />
          </Column>
          <Column align="center" width={250}>
            <HeaderCell>Design ID</HeaderCell>
            <Cell dataKey="Design_Id" />
          </Column>
          <Column align="center" width={250}>
            <HeaderCell>Vendor ID</HeaderCell>
            <Cell dataKey="Vendor_Id" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Price</HeaderCell>
            <Cell dataKey="Design_Price" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Set up Place</HeaderCell>
            <Cell dataKey="Design_Setup_Place" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Theme Base</HeaderCell>
            <Cell dataKey="Design_Theme" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Set up Duration</HeaderCell>
            <Cell dataKey="Design_Setup_Duration" />
          </Column>
          <Column width={200} align="center">
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {rowData => {
                return (
                  <Link href={`/admin/add-design`}>
                    <a href={`/admin/add-design`}>Edit</a>
                  </Link>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </section>
    </main>
  );
};

export default ListedDesign;
