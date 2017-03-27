import React from 'react';
import ElementoResultados from '../elementoResultados/elementoResultados.jsx';

export default class ListaResultados extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(){
  	this.forceUpdate();
  }
  render() {


  	var lista= this.props.arrayResultados.map((value, index)=>{

      return <ElementoResultados key={value.ID} URL={''+value.URL+''} titulo={value.titulo} bajada={value.bajada} profesores={value.profesores}/>;
      	//	return <div className=""><a href={''+value.URL+''}>{value.titulo}</a> </div>
      	});

    var listaCompleta= <ul className="listaresultados">{lista}</ul>;


    return (
      <div className="resultados">  
      {lista.length? listaCompleta : <p>No hay elementos en la lista!</p>}
      </div>
    );
  }
}
