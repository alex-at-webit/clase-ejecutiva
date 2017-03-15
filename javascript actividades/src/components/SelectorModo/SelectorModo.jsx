import React from 'react';

export default class SelectorModo extends React.Component {

  constructor(props) {
    super(props);

    this.cambiarModo = this.cambiarModo.bind(this);
  }


cambiarModo(e){
  var valor= e.target.value;

  this.props.changeHandler(valor);
}

  render() {
    return (
      <select onChange={this.cambiarModo}>
      <option value='seminarios'>Seminarios</option>
      <option value='charlas'>Charlas</option>
      </select>
    );
  }
}
