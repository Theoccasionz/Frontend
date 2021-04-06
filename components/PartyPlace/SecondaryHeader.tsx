import React from 'react';
import style from '../../styles/party-place/secondaryHeader.module.css';

const SecondaryHeader = () => {
  return (
    <main className={`d-flex justify-content-between px-3 py-3 align-items-center ${style.header}`}>
      <div>
        <span>Heading here</span>
        <span className={style.brand}>The Occasionz</span>
      </div>
      <div>Favourites here</div>
    </main>
  );
};

export default SecondaryHeader;
