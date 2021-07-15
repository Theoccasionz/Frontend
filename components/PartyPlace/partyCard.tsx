import Link from 'next/link';
import React, { FC } from 'react';
import { IMG_BASE_URL } from '../../constants';
import styles from '../../styles/party-card.module.css';

type Props = {
  value: string;
  url: string;
  imgURL: string;
};
const PartyCard: FC<Props> = ({ value, url, imgURL }) => {
  return (
    <div>
      <div
        style={{
          fontSize: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
        }}
      >
        <Link href={`/party-place/places/?${url}=${value}`}>
          <a href={`/party-place/places/?${url}=${value}`}>{value}</a>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width={30}
          height={30}
          viewBox="0 0 350 350"
          xmlSpace="preserve"
          style={{ cursor: 'pointer' }}
        >
          <title>Add to favourites</title>
          <defs></defs>
          <g
            id="icon"
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: 'none',
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)"
          >
            <path
              d="M 45 83.769 L 6.653 45.422 C 2.363 41.132 0 35.428 0 29.36 s 2.363 -11.771 6.653 -16.062 c 4.29 -4.291 9.994 -6.653 16.062 -6.653 c 6.068 0 11.772 2.363 16.062 6.653 L 45 19.521 l 6.223 -6.223 c 4.29 -4.291 9.995 -6.653 16.063 -6.653 s 11.771 2.363 16.062 6.653 S 90 23.293 90 29.36 s -2.363 11.771 -6.653 16.062 L 45 83.769 z M 22.715 8.645 c -5.533 0 -10.735 2.155 -14.647 6.067 S 2 23.827 2 29.36 s 2.155 10.735 6.067 14.647 L 45 80.94 l 36.933 -36.933 C 85.845 40.095 88 34.894 88 29.36 s -2.155 -10.735 -6.067 -14.648 C 78.02 10.8 72.817 8.645 67.285 8.645 c -5.533 0 -10.735 2.155 -14.648 6.067 L 45 22.35 l -7.637 -7.637 C 33.45 10.8 28.249 8.645 22.715 8.645 z"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                fill: 'rgb(0,0,0)',
                fillRule: 'nonzero',
                opacity: 1,
              }}
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
      <Link href={`/party-place/places/?${url}=${value}`}>
        <a href={`/party-place/places/?${url}=${value}`}>
          <img src={IMG_BASE_URL + imgURL} alt={value} className={`d-block ${styles.img}`} />
        </a>
      </Link>
    </div>
  );
};

export default PartyCard;
