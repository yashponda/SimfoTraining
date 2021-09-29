import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import '../Meals.css';
import cartContext from '../../../store/cart_context'

const MealItem = (props) => {
  const cartCtx = useContext(cartContext);
  const price = `${props.price} Rs`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <p className="description">{props.description}</p>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;