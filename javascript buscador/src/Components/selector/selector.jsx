import React from 'react';

export default class Selector extends React.Component {

  constructor(props) {
    super(props);
    this.manejadorSeleccion=this.manejadorSeleccion.bind(this);
  }

    manejadorSeleccion(e){

    var valor = e.target.value;

    this.props.changeHandler(valor);
  }

  render() {
    return (
      <div className="filtroazul">
      <div id="pulldowns">
      <div id="pulldown-seleccion">
      <span>Qué buscar?</span>
    <select onChange={this.manejadorSeleccion}>
    	<option value={null}>Seleccione</option>
      <option value={'cursos'}>Cursos</option>
      <option value={'diplomados'}>Diplomados</option>
      </select>
      </div>
      </div>
      </div>
    );
  }
}
