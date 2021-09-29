import React from "react";
//import "./Card.css";

const Card = (props) => {
    return (
        <div className="card_meal_box">
            {props.children}
        </div>
    );
}

export default Card;