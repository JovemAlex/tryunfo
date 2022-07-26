import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <section>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            checksTrunfo={ this.checksTrunfo }
          />
        </section>
        <section>
          <Card
            { ...this.state }
          />
        </section>
      </div>
    );
  }
}

export default App;
