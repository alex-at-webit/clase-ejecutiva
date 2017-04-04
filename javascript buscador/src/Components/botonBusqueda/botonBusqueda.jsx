import React from 'react';

export default class BotonBusqueda extends React.Component {

  constructor(props) {
    super(props);

    this.clickHandler= this.clickHandler.bind(this);

  }

clickHandler (e){

	e.preventDefault();
	this.props.clickHandler(e);
}

  render() {
    return (
<button className='btnfiltrar' type='button' disabled={this.props.isDisabled} onClick= {this.clickHandler}>Filtrar</button>
    );
  }
}
