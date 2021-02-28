import { FC } from 'react';
import Image from 'next/image';

type PartyData = {
  Venue_Id: number;
  Venue_Name: string;
  Venue_Logo_Img_Url: string;
  Venue_Area: string;
  Venue_Address: string;
  Venue_Type: string;
  Venue_Desc: string;
  Venue_Img_url: string;
  Party_Date: string;
  Party_Time: String;
  Party_Pass_count: 50;
  Price_Variation_Flag: 1;
  Party_Price: 1000;
};

type Props = {
  data: PartyData;
};

const ThemePartyCard: FC<Props> = ({ data }) => {
  const {
    Party_Date,
    Party_Pass_count,
    Party_Price,
    Party_Time,
    Price_Variation_Flag,
    Venue_Address,
    Venue_Area,
    Venue_Desc,
    Venue_Id,
    Venue_Img_url,
    Venue_Logo_Img_Url,
    Venue_Name,
    Venue_Type,
  } = data;
  return (
    <main className="m-3">
      <section className="w-100">
        <Image
          layout="responsive"
          height={300}
          width={300}
          alt={Venue_Name}
          src={Venue_Img_url || '/index.jpeg'}
        />
      </section>
      <section className="w-100">
        <div className="d-flex justify-content-between align-items-center px-2">
          <h3 className="w-50">
            {Venue_Name}
            <br />
            {`${Venue_Address},${Venue_Area}`}
          </h3>
          <p className="w-50 text-right ">
            <span className="badge badge-pill badge-primary">
              {new Date(Party_Date).toDateString()}
            </span>
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center px-2">
          <p className="w-50">{Party_Pass_count} left</p>
          <p className="w-50 text-right">
            <span className=" badge badge-primary">Rs.{Party_Price} Buy</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ThemePartyCard;
