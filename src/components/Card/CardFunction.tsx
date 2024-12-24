import React from "react";
import "./CardFunction.css";

interface CardProps {
  name: string;
}

const CardFunction: React.FC<CardProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello Good Morning {name}</h1>
    </div>
  );
};

export default CardFunction;
