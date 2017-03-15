import React from 'react';
import ListaItems from '../ListaItems/ListaItems.jsx';
import ActividadDestacada from '../ActividadDestacada/ActividadDestacada.jsx';
import SelectorModo from '../SelectorModo/SelectorModo.jsx';
export default class ActividadesApp extends React.Component {


  constructor(props) {
    super(props);
    this.state={modo:"seminarios"};
    this.cambioDeModo = this.cambioDeModo.bind(this);
  }

  cambioDeModo(nuevoModo){ 

    this.setState({modo:nuevoModo});


  }
  render() {

    if(this.state.modo === "seminarios"){

      var actividadDestacada= this.props.actividades.charlas && this.props.actividades.charlas[0];
      var listaActividades= this.props.actividades.seminarios;
    }
    else{

      var actividadDestacada= this.props.actividades.seminarios[0];
      var listaActividades= this.props.actividades.charlas;

    }


    return (
      <div>
      <SelectorModo changeHandler={this.cambioDeModo}/>
      {actividadDestacada? <ActividadDestacada actividad={actividadDestacada}/> : null} 
      <ListaItems actividades={listaActividades} />
      </div>
    );
  }
}
