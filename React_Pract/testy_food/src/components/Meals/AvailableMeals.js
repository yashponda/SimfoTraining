import Card from "../UI/Card";
import "./Meals.css";
import MealItem from "./MealItem/MealItem";

const dummy_meal = [
    {
        id: "m1",
        name: "Burger",
        price: "99",
        description: "Finest burger with yummy saus"
    },
    {
        id: "m2",
        name: "Manchurian",
        price: "199",
        description: "Dry and Gravy Manchurian in full and half size"
    },
    {
        id: "m3",
        name: "Ice Cream",
        price: "119",
        description: "More than 10 Flavours icecreams available"
    },
    {
        id: "m4",
        name: "Pizza",
        price: "399",
        description: "Instant pizza available"
    },
];

const AvailableMeals = (props) => {

    const mealsList = dummy_meal.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ));    
    return (
        <section className="available_meals">
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;