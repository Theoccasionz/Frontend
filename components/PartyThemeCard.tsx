import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Badge from 'react-bootstrap/Badge';

type PartyThemeCardProps = {
  image: string;
  count: Number;
  name: string;
};

const PartyThemeCard = ({ image, count, name }: PartyThemeCardProps) => {
  return (
    <Col>
      <div>
        <Image width={300} height={300} layout="responsive" alt={name} src={`/images/${image}`} />
      </div>
      <div className="text-center pt-3">
        <h2>{name}</h2>
        <h4 title="count">
          <Badge variant="primary">{count}</Badge>
        </h4>
      </div>
    </Col>
  );
};

export default PartyThemeCard;
