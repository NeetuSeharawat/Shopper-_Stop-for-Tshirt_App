import { useContext } from 'react';


import classes from './TshirtsItem.module.css';
import CartContext from '../../../store/cart-context';
import TshirtsItemForm from '../TshirtsItemForm';

const TshirtsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.AvailableTshirts}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TshirtsItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default TshirtsItem;