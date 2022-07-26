import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import OnCard from './components/OnCard';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onCard: [],
    };
  }

  getCard = (card) => {
    this.setState((prevState) => (
      { onCard: [...prevState.onCard, card] }
    ));
  };

  onInputChange = ({ target: { name, value, type, checked } }) => {
    value = type === 'checkbox' ? checked : value;

    this.setState({ [name]: value }, () => {
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const states = Object.values(this.state);
      const number = 90;
      const number2 = 210;
      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      if (states.some((data) => data > number || data < 0 || data === '')) {
        this.setState({ isSaveButtonDisabled: true });
      } else if (sum > number2) {
        this.setState({ isSaveButtonDisabled: true });
      } else {
        this.setState({ isSaveButtonDisabled: false });
      }
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onCard,
    } = this.state;

    if (onCard.every((element) => (element.hasTrunfo))) {
      this.setState({ hasTrunfo: true });
    }

    this.getCard({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  verifySuperTrunfo = () => {
    const { onCard } = this.state;
    const verifyHasTrunfo = onCard.some((card) => (card.hasTrunfo === true));
    if (verifyHasTrunfo === true) {
      // eslint-disable-next-line no-undef
      this.setState(hasTrunfo === false);
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onCard,
    } = this.state;

    return (
      <div className="every">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div className="previousCard">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            showRemoveButton={ false }
          />
        </div>
        <OnCard
          verifySuperTrunfo={ this.verifySuperTrunfo }
          onCard={ onCard }
        />
      </div>
    );
  }
}
