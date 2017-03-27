import React from 'react';
import BotonBusqueda from '../botonBusqueda/botonBusqueda.jsx';

export default class Filtros extends React.Component {

  constructor(props) {
    super(props);
    this.manejadorCambioArea=this.manejadorCambioArea.bind(this);
    this.manejadorCambioBimestre=this.manejadorCambioBimestre.bind(this);
  }

  manejadorCambioArea(e){
  	var valor= {area:e.target.value};

  	this.props.changeHandler(valor);
  }

  manejadorCambioBimestre(e){
  	var valor= {bimestre: e.target.value};

  	this.props.changeHandler(valor);
  }
  
  render() {
    var boton= this.props.boton;

    return (
      <div className="buscador">
    	<form>
      <div className="seleccionarea">
      <label htmlFor="selectarea">Seleccione el área</label>
      <select onChange={this.manejadorCambioArea} name="selectarea" id="selectarea">
      <option value={'all'}>7 Areas</option>
      {this.props.areas.map((area)=>{
      	return <option value={area.ID} key={area.ID}>{area.titulo}</option>;
      })}
      <option value={'NA'}>Sin Area</option>
      </select>

      </div>
      {(this.props.modo=='cursos')?(
        <div className="seleccionbimestre">
           <label htmlFor="selectbimestre">Seleccione el bimestre</label>
          <select onChange={this.manejadorCambioBimestre} name="selectbimestre" id="selectbimestre">
            <option value={'all'}>5 Bimestres</option>
            <option value={1}>Primero</option>
            <option value={2}>Segundo</option>
            <option value={3}>Tercero</option>
            <option value={4}>Cuarto</option>
            <option value={5}>Quinto</option>
            </select>
            </div>):''}

      {boton.mostrarBoton?<BotonBusqueda isDisabled={boton.isDisabled} clickHandler={boton.clickHandler} /> :''}
      </form>
      </div>
    );
  }
}
