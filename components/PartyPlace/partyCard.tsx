import Link from 'next/link';
import React, { FC } from 'react';
import { IMG_BASE_URL } from '../../constants';
import styles from "../../styles/party-card.module.css";

type Props = {
  value: string;
  url: string;
  imgURL: string;
};
const PartyCard: FC<Props> = ({ value, url, imgURL }) => {
  return (
    <div>
      <Link href={`/party-place/places/?${url}=${value}`}>
        <a href={`/party-place/palces/?${url}=${value}`}>
          {value}
          <img src={IMG_BASE_URL+imgURL} alt={value} className={`d-block ${styles.img}`}/>
        </a>
      </Link>
    </div>
  );
};

export default PartyCard;
