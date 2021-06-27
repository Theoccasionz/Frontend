import React from 'react';
import style from '../../styles/party-place/secondaryHeader.module.css';

const SecondaryHeader = () => {
  return (
    <main className={`d-flex justify-content-between px-3 py-3 align-items-center ${style.header}`}>
      <div>
        <span>Heading here</span>
        <span className={style.brand}>The Occasionz</span>
      </div>
      <div title="Favourites">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width={40}
          height={40}
          viewBox="0 0 350 350"
          xmlSpace="preserve"
          style={{ cursor: 'pointer' }}
        >
          <desc>Created with Fabric.js 1.7.22</desc>
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
              d="M 84.646 11.504 C 75.554 1.233 58.335 -0.041 45 13.074 C 31.665 -0.041 14.446 1.233 5.354 11.504 c -9.671 10.926 -5.609 31.318 7.123 47.615 C 18.931 67.38 34.874 80.832 45 86.481 c 10.126 -5.649 26.069 -19.101 32.523 -27.362 C 90.255 42.822 94.318 22.43 84.646 11.504 z"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                fill: 'rgb(248,48,95)',
                fillRule: 'nonzero',
                opacity: 1,
              }}
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </main>
  );
};

export default SecondaryHeader;
