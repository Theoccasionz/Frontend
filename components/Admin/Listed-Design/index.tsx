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
      console.log(response);
      if (response.error) {
        throw new Error(response.error);
      }
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
        <Table data={data} height={300}>
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
