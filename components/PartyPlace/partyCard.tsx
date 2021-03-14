import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  value: String;
  url: String;
};
const PartyCard: FC<Props> = ({ value, url }) => {
  return (
    <div>
      <Link href={`/party-place/${url}/${value}`}>
        <a href={`/party-place/${url}/${value}`}>{value}</a>
      </Link>
    </div>
  );
};

export default PartyCard;
