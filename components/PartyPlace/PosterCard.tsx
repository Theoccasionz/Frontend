import React, { FC } from 'react';

type Props = {
  url: string;
  name: string;
  width?: number | string;
  height?: number;
};

const PosterCard: FC<Props> = ({ url, name }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img loading="eager" src={url} alt={name} style={{ width: '95vw' }} />
    </div>
  );
};

export default PosterCard;
