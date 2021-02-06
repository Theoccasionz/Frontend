import Col from 'react-bootstrap/Col';
import Image from 'next/image';

type PartyThemeCardProps = {
  image: string;
  count: Number;
  name: string;
};

const PartyThemeCard = ({ image, count, name }: PartyThemeCardProps) => {
  return (
    <Col>
      <div>
        <img width="100%" height={300} alt={name} src={image} />
      </div>
      <div className="d-flex justify-content-between">
        <p>{name}</p>
        <p className="badge">{count}</p>
      </div>
    </Col>
  );
};

export default PartyThemeCard;
