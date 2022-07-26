import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section>
        <header>
          <h1>Tryunfo!</h1>
        </header>

        <form action="">
          {/* name */}
          <label htmlFor="name-input">
            <p>Nome da carta</p>
            <input
              name="cardName"
              type="text"
              id="name"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          {/* describe */}
          <label htmlFor="description-input">
            <p>Descrição da carta</p>
            <textarea
              name="cardDescription"
              id="describe"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          {/* input atributo */}
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              name="cardAttr1"
              type="number"
              id="atributo1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          {/* input atributo 2 */}
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              name="cardAttr2"
              type="number"
              id="atributo2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          {/* input atributo 3 */}
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              name="cardAttr3"
              type="number"
              id="atributo3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          {/* input de texto 2 */}
          <label htmlFor="image-input">
            Imagem
            <input
              name="cardImage"
              type="text"
              id="text2"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          {/* rarity */}
          <label htmlFor="rare-input">
            Raridade
            <select
              name="cardRare"
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          {/* super trunfo */}
          <label htmlFor="trunfo-input">
            Super Trunfo
            { hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span> : <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            /> }
          </label>
          <br />
          {/* btn */}
          <button
            id="btn"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
