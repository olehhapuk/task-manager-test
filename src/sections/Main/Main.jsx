import React, { Component } from "react";
import Card from "../../components/Card";
import AddCard from '../../components/Card/AddCard';

export default class Main extends Component {
  state = {
    addCardVisible: false,
    cards: [
      {
        id: 1,
        nickname: "123",
        priority: "High",
        date: new Date().toLocaleDateString(),
        text: "adaew",
      },
      {
        id: 2,
        nickname: "123",
        priority: "High",
        date: new Date().toLocaleDateString(),
        text: "adaew",
      },
    ],
  };
  showAddCard = () => {
    this.setState({addCardVisible: true});
  }
  addCard = (cardData) => {
    this.setState((prevState) => ({
      cards: [cardData, ...prevState.cards],
      addCardVisible: false,
    }))
  };
  deleteCard = (id) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => (card.id !== id)),
    }))
  }
  render() {
    const { cards, addCardVisible } = this.state;
    return (
      <div>
        <button onClick={this.showAddCard} className=" rounded-full py-3 px-6 bg-blue-400 ml-2 mt-2">Add Card</button>
        <div className="grid grid-cols-3 mx-32 mr-8 pb-8">
          {addCardVisible && <AddCard onAddCard={this.addCard}/>}
          {cards.map((card) => (
            <Card key={card.id} {...card} onDelete={this.deleteCard}/>
          ))}
        </div>
      </div>
    );
  }
}
