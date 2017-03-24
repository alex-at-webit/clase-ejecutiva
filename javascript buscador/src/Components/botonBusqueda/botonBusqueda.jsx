import React from 'react';

export default class BotonBusqueda extends React.Component {

  constructor(props) {
    super(props);

    this.clickHandler= this.clickHandler.bind(this);

  }

clickHandler (){
	this.props.clickHandler();
}

  render() {
    return (
<button className='btnfiltrar' type='button' disabled={this.props.isDisabled} onClick= {this.clickHandler}>Filtrar</button>
    );
  }
}
