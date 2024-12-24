import React, { Component } from "react";

interface CardProps {
  userName: string;
}

interface CardState {
  greeting: string;
}

class CardClass extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      greeting: `Hello Good Morning ${this.props.userName}`,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default CardClass;
