import React from 'react';
import Link from 'next/link';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';

import 'rsuite-table/dist/css/rsuite-table.css';
import style from '../../../styles/admin/listed-design.module.css';

const fakeData = [
  {
    ThemeName: 'Random',
    ThemeID: Math.floor(Math.random() * 10000000).toString(),
    VendorID: Math.floor(Math.random() * 10000000).toString(),
    Price: Math.floor(Math.random() * 10000000).toString(),
    Occassion: 'Random',
    SetupPlace: 'Random',
    ThemeBase: 'Random',
    SetupTheme: 'Random',
  },
  {
    ThemeName: 'Random',
    ThemeID: Math.floor(Math.random() * 10000000).toString(),
    VendorID: Math.floor(Math.random() * 10000000).toString(),
    Price: Math.floor(Math.random() * 10000000).toString(),
    Occassion: 'Random',
    SetupPlace: 'Random',
    ThemeBase: 'Random',
    SetupTheme: 'Random',
  },
  {
    ThemeName: 'Random',
    ThemeID: Math.floor(Math.random() * 10000000).toString(),
    VendorID: Math.floor(Math.random() * 10000000).toString(),
    Price: Math.floor(Math.random() * 10000000).toString(),
    Occassion: 'Random',
    SetupPlace: 'Random',
    ThemeBase: 'Random',
    SetupTheme: 'Random',
  },
  {
    ThemeName: 'Random',
    ThemeID: Math.floor(Math.random() * 10000000).toString(),
    VendorID: Math.floor(Math.random() * 10000000).toString(),
    Price: Math.floor(Math.random() * 10000000).toString(),
    Occassion: 'Random',
    SetupPlace: 'Random',
    ThemeBase: 'Random',
    SetupTheme: 'Random',
  },
];

const ListedDesign = () => {
  return (
    <main className="mt-3">
      <section className={style.filters}>
        <div>
          <label htmlFor="Occassion">Occassion</label>
          <select className={``} name="Occassion">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="SetupPlace">SetupPlace</label>
          <select className={``} name="SetupPlace">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="ThemeBase">ThemeBase</label>
          <select className={``} name="ThemeBase">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="Budget">Budget</label>
          <select className={``} name="Budget">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="SetupTime">SetupTime</label>
          <select className={``} name="SetupTime">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="ThemeID">ThemeID</label>
          <select className={``} name="ThemeID">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <label htmlFor="VendorID">VendorID</label>
          <select className={``} name="VendorID">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </section>
      <section className={`mt-4`}>
        <Table data={fakeData} height={300}>
          <Column width={200} align="center" fixed resizable>
            <HeaderCell>Theme Name</HeaderCell>
            <Cell dataKey="ThemeName" />
          </Column>
          <Column align="center" width={250}>
            <HeaderCell>Theme ID</HeaderCell>
            <Cell dataKey="ThemeID" />
          </Column>
          <Column align="center" width={250}>
            <HeaderCell>Vendor ID</HeaderCell>
            <Cell dataKey="VendorID" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Price</HeaderCell>
            <Cell dataKey="Price" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Set up Place</HeaderCell>
            <Cell dataKey="SetupPlace" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Theme Base</HeaderCell>
            <Cell dataKey="ThemeBase" />
          </Column>
          <Column align="center" width={300}>
            <HeaderCell>Set up Theme</HeaderCell>
            <Cell dataKey="SetupTheme" />
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
