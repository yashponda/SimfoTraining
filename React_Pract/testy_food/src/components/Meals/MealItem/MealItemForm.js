import { useRef,useState } from "react";
import "./MealItemForm.css";
import Input from "../../UI/Input.js";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enterdAmount = amountInputRef.current.value;
        const enterdAmountNumber = +enterdAmount;

        if (
            enterdAmount.trim().length() === 0 || 
            enterdAmountNumber < 1 ||
            enterdAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enterdAmountNumber);
    };
    return (
        <form className="form" onSubmit={submitHandler}>
          <Input
            ref={amountInputRef}
            label='Amount'
            input={{
              id: 'amount',
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1',
            }}
          />
          <button>+ Add</button>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
      );
};

export default MealItemForm;