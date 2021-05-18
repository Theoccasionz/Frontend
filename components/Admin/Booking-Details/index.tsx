import React from 'react';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';

import 'rsuite-table/dist/css/rsuite-table.css';
import style from '../../../styles/admin/booking-details.module.css';

const fakeData = [
  {
    name: 'Random',
    themeName: 'Random',
    vendorID: Math.floor(Math.random() * 10000000).toString(),
    bookedDate: new Date().toISOString(),
    setupDate: new Date().toISOString(),
    price: Math.floor(Math.random() * 10000000).toString(),
    themeBase: 'Random',
    occassion: 'Random',
    setupPlace: 'random',
    status: 'lets see',
  },
  {
    name: 'Random',
    themeName: 'Random',
    vendorID: Math.floor(Math.random() * 10000000).toString(),
    bookedDate: new Date().toISOString(),
    setupDate: new Date().toISOString(),
    price: Math.floor(Math.random() * 10000000).toString(),
    themeBase: 'Random',
    occassion: 'Random',
    setupPlace: 'random',
    status: 'lets see',
  },
  {
    name: 'Random',
    themeName: 'Random',
    vendorID: Math.floor(Math.random() * 10000000).toString(),
    bookedDate: new Date().toISOString(),
    setupDate: new Date().toISOString(),
    price: Math.floor(Math.random() * 10000000).toString(),
    themeBase: 'Random',
    occassion: 'Random',
    setupPlace: 'random',
    status: 'lets see',
  },
  {
    name: 'Random',
    themeName: 'Random',
    vendorID: Math.floor(Math.random() * 10000000).toString(),
    bookedDate: new Date().toISOString(),
    setupDate: new Date().toISOString(),
    price: Math.floor(Math.random() * 10000000).toString(),
    themeBase: 'Random',
    occassion: 'Random',
    setupPlace: 'random',
    status: 'lets see',
  },
];

const BookingDetails = () => {
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
        <Table data={fakeData} height={300}>
          <Column width={200} align="center" fixed resizable>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column align="center" width={250}>
            <HeaderCell>Theme Name</HeaderCell>
            <Cell dataKey="themeName" />
          </Column>
          <Column align="center" width={250}>
            <HeaderCell>Booked Date</HeaderCell>
            <Cell dataKey="bookedDate" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Set up Date</HeaderCell>
            <Cell dataKey="setupDate" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Price</HeaderCell>
            <Cell dataKey="price" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Theme Base</HeaderCell>
            <Cell dataKey="themeBase" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Occassion</HeaderCell>
            <Cell dataKey="occassion" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Set up Place</HeaderCell>
            <Cell dataKey="setupPlace" />
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
