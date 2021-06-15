import React, { useEffect, useState } from 'react';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import { getBookings } from '../../../server/admin';

import 'rsuite-table/dist/css/rsuite-table.css';
import style from '../../../styles/admin/booking-details.module.css';

const BookingDetails = () => {
  const fetchBookings = async () => {
    try {
      let response = await getBookings();
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

  const [bookedDateFilter, setBookedDateFilter] = useState('all');
  const [setupDateFilter, setSetupDateFilter] = useState('all');
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
    if (vendorIdFilter !== 'all') {
      changeData = changeData.filter(
        (el: any) => el.Vendor_Id.toString() === vendorIdFilter.toString()
      );
    }
    if (bookedDateFilter !== 'all') {
      changeData = changeData.filter((el: any) => el.Booking_Date === bookedDateFilter);
    }
    if (setupDateFilter !== 'all') {
      changeData = changeData.filter((el: any) => el.Booking_Setup_DATE === setupDateFilter);
    }
    setFilteredData(changeData);
  }, [bookedDateFilter, vendorIdFilter, setupDateFilter]);

  return (
    <div>
      <section className={style.filters}>
        <div>
          <label htmlFor="BookedDate">Booked Date</label>
          <select
            className={``}
            name="BookedDate"
            onChange={e => setSetupDateFilter(e.target.value)}
          >
            <option value="all">All</option>
            {renderOptions(data, 'Booking_Date')}
          </select>
        </div>

        <div>
          <label htmlFor="SetupDate">Setup Date</label>
          <select
            className={``}
            name="SetupDate"
            onChange={e => setSetupDateFilter(e.target.value)}
          >
            <option value="all">All</option>
            {renderOptions(data, 'Booking_Setup_DATE')}
          </select>
        </div>

        <div>
          <label htmlFor="VendorID">Vendor ID</label>
          <select className={``} name="VendorID" onChange={e => setVendorIdFilter(e.target.value)}>
            <option value="all">All</option>
            {renderOptions(data, 'Vendor_Id')}
          </select>
        </div>

        <div>
          <label htmlFor="Occassion">Occassion</label>
          <select className={``} name="Occassion">
            <option value="all">All</option>
          </select>
        </div>
      </section>
      <section>
        <Table data={filteredData} height={300}>
          <Column width={200} align="center" fixed resizable>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="Booked_Design_Name" />
          </Column>
          <Column align="center" width={350}>
            <HeaderCell>Theme Name</HeaderCell>
            <Cell dataKey="themeName" />
          </Column>
          <Column align="center" width={350}>
            <HeaderCell>Booked Date</HeaderCell>
            <Cell dataKey="Booking_Date" />
          </Column>
          <Column align="center" width={400}>
            <HeaderCell>Set up Date</HeaderCell>
            <Cell dataKey="Booking_Setup_DATE" />
          </Column>
          <Column align="center" width={400}>
            <HeaderCell>Price</HeaderCell>
            <Cell dataKey="price" />
          </Column>
          <Column width={200} align="center">
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {rowData => {
                return (
                  <select className={``} name="SetupDate">
                    <option value="complete">Complete</option>
                    <option value="cancel">Cancel</option>
                  </select>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </section>
    </div>
  );
};

export default BookingDetails;
