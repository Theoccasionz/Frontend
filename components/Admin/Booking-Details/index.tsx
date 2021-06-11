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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);
  const [data, setData] = useState([]);

  return (
    <div>
      <section className={style.filters}>
        <div>
          <label htmlFor="BookedDate">Booked Date</label>
          <select className={``} name="BookedDate">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="SetupDate">Setup Date</label>
          <select className={``} name="SetupDate">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="VendorID">Vendor ID</label>
          <select className={``} name="VendorID">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="Occassion">Occassion</label>
          <select className={``} name="Occassion">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </section>
      <section>
        <Table data={data} height={300}>
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
