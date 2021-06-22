import React, { useEffect, useState } from 'react';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import { changeBookingStatus, getBookings } from '../../../server/admin';

import 'rsuite-table/dist/css/rsuite-table.css';
import style from '../../../styles/admin/booking-details.module.css';
import Loading from '../../Loading/loading';

const BookingDetails = () => {
  const fetchBookings = async () => {
    try {
      setLoading(true);
      let response = await getBookings();
      setLoading(false);
      response.forEach((booking: any) => {
        booking.Booking_Setup_DATE =
          new Date(booking.Booking_Setup_DATE).getFullYear() +
          ' - ' +
          new Date(booking.Booking_Setup_DATE).getMonth() +
          ' - ' +
          new Date(booking.Booking_Setup_DATE).getDate();
        booking.Booking_Date =
          new Date(booking.Booking_Date).getFullYear() +
          ' - ' +
          new Date(booking.Booking_Date).getMonth() +
          ' - ' +
          new Date(booking.Booking_Date).getDate();
      });
      setData(response);
      setFilteredData(response);
    } catch (error) {
      setLoading(false);
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
  const [loading, setLoading] = useState(false);

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

  const handlechangeStatus = async (value: any, id: any) => {
    setLoading(true);
    try {
      let data = { id, content: { Booking_Status: value } };
      let response = await changeBookingStatus(data);
      if (response.error) {
        throw new Error(response.error);
      } else {
        setLoading(false);
        alert('Changed status');
      }
    } catch (error) {
      setLoading(false);
      alert('error');
    }
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
      {loading && <Loading />}
      <section className={style.filters}>
        <div>
          <label htmlFor="BookedDate">Booked Date</label>
          <select
            className={``}
            name="BookedDate"
            onChange={e => setBookedDateFilter(e.target.value)}
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
            <HeaderCell>Customer Name</HeaderCell>
            <Cell dataKey="Customer_Name" />
          </Column>
          <Column align="center" width={350}>
            <HeaderCell>Design Name</HeaderCell>
            <Cell dataKey="Booked_Design_Name" />
          </Column>
          <Column align="center" width={350}>
            <HeaderCell>Booked Date</HeaderCell>
            <Cell dataKey="Booking_Date" title="yyyy-dd-mm" />
          </Column>
          <Column align="center" width={400}>
            <HeaderCell>Set up Date</HeaderCell>
            <Cell dataKey="Booking_Setup_DATE" title="yyyy-dd-mm" />
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
                  <select
                    className={``}
                    name="SetupDate"
                    onChange={e => handlechangeStatus(e.target.value, rowData.BookingDetails_Id)}
                  >
                    <option value="UPCOMING" selected={rowData.Booking_Status === 'UPCOMING'}>
                      Upcoming
                    </option>
                    <option value="SERVICED" selected={rowData.Booking_Status === 'SERVICED'}>
                      Serviced
                    </option>
                    <option value="CANCELLED" selected={rowData.Booking_Status === 'CANCELLED'}>
                      Cancelled
                    </option>
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
