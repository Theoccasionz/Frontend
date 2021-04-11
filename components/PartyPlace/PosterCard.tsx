import React, { FC } from 'react';

type Props = {
  url: string;
  name: string;
  width?: number | string;
  height?: number;
};

const PosterCard: FC<Props> = ({ url, name }) => {
  return <img loading="eager" src={url} alt={name} />;
};

export default PosterCard;
