import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class OnCard extends Component {
  constructor() {
    super();
    this.state = {
      removeCard: false,
    };
  }

  removeButton = (event) => {
    const { onCard } = this.props;
    const checkCard = onCard.find((card) => (card.cardName === event.target.id));
    const index = onCard.indexOf(checkCard);
    onCard.splice(index, 1);
    const { removeCard } = this.state;
    const movRemoveCard = removeCard;
    this.setState({ removeCard: !movRemoveCard });
    console.log(onCard);
  }

  render() {
    const { onCard, verifySuperTrunfo } = this.props;

    return (
      <div>
        { onCard.map((value) => (
          <Card
            showRemoveButton
            verifySuperTrunfo={ verifySuperTrunfo }
            removeButton={ this.removeButton }
            key={ value.cardName }
            { ...value }
          />
        )) }
      </div>
    );
  }
}

OnCard.propTypes = {
  onCard: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  verifySuperTrunfo: PropTypes.func.isRequired,
};
