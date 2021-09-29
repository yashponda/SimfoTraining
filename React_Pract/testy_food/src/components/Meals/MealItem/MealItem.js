import MealItemForm from './MealItemForm';
import '../Meals.css';

const MealItem = (props) => {
  const price = `${props.price} Rs`;

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <p className="description">{props.description}</p>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;