import Image from 'next/image';
import Badge from 'react-bootstrap/Badge';

import styles from '../styles/card.module.css';

type PartyThemeCardProps = {
  image: string;
  count: Number;
  name: string;
};

const PartyThemeCard = ({ image, count, name }: PartyThemeCardProps) => {
  return (
    <div className={styles.card}>
      <Image width={300} height={400} layout="responsive" alt={name} src={`/images/${image}`} />
      <div className={styles.dataContainer}>
        <h2 className="text-center">{name}</h2>
        <h4 title="count" className="text-center">
          <Badge variant="primary">{count}</Badge>
        </h4>
      </div>
    </div>
  );
};

export default PartyThemeCard;
