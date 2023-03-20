import Card from '../UI/Card';
import TshirtsItem from './TshirtsItem/TshirtsItem';
import classes from './AvailableTshirts.module.css';

const DUMMY_Tshirts = [
  {
    id: 'm1',
    name: 'Navy Blue Armanis Tshirt',
    description: 'Pure Cotton',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Gucci Tshirt',
    description: 'Cotton Collar Tshirt',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Nike  Tshirt',
    description: 'Cotton Printed Sports Tshirt',
    price: 7.99,
  },
  {
    id: 'm4',
    name: 'Puma',
    description: 'Graphic printed Tshirt ',
    price: 18.99,
  },
];

const AvailableTshirts = () => {
  const tshirtsList = DUMMY_Tshirts.map((tshirt) => (
    <TshirtsItem
      key={tshirt.id}
      id={tshirt.id}
      name={tshirt.name}
      description={tshirt.description}
      price={tshirt.price}
    />
  ));

  return (
    <section className={classes.tshirts}>
      <Card>
        <ul>{tshirtsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTshirts;