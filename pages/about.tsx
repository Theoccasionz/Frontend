import React, { FC, ReactElement } from 'react';
import LayoutPartyPlace from '../layouts/party-place';

const AboutPage: FC = (): ReactElement => {
  return (
    <LayoutPartyPlace>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>About Us</h1>
        <p className="about-para">
          Life is all about the fun, care and affection towards your loved ones. The special
          occasions offer a great time to spend with your lovable one. Whether it’s your birthday
          party, anniversary, baby shower or any other occasion, all these celebrations need to be
          adored and with this mission The Occasionz wants to transform how people celebrate
          different occasions and evolve the party culture in India. The Occasionz provides a one
          stop platform where you can book signature experiences and decorations. We make
          celebrations hassle free and assure you of hygiene, safety, right price and timely
          services so that you can make the most of any occasion !
        </p>
      </div>
    </LayoutPartyPlace>
  );
};

export default AboutPage;
