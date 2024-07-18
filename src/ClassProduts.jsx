import React from 'react';

class ClassProduts extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'eFootball';
  }

  render() {
    return (
      <h2>O nome do jogo é: {this.props.produto} + {this.name}</h2>
    )
  }
}

export default ClassProduts; 