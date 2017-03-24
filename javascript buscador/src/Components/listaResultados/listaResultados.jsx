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

      return <ElementoResultados URL={''+value.URL+''} titulo={value.titulo} bajada={value.bajada} profesores={value.profesores}/>;
      	//	return <div className=""><a href={''+value.URL+''}>{value.titulo}</a> </div>
      	});

    lista= <ul>{lista}</ul>;

    var modoString=this.props.modo=='cursos'?'Cursos ':'Diplomados ';
  	var area=null;
  	var areaString='';
  	var bimestre=null;
  	var bimestreString='';

  	if(this.props.parametros.area){
  		if(this.props.parametros.area!=="all"){

  			this.props.areas.forEach((valor, index) =>{
  			if(valor.ID==this.props.parametros.area)
  			{	

  				area=valor.titulo;
  			}
  		});

  			areaString=' del area '+area;

  		}else{
  			areaString=' de todas las areas ';

  		}
  		
  	}

  	if(this.props.parametros.bimestre){
  		if(this.props.parametros.bimestre!=="all"){


  	bimestreString=' del bimestre '+this.props.parametros.bimestre;

  		}else{
  			bimestreString=' de todos los bimestres';

  		}
  		
  	}

  	var fullString = areaString+bimestreString;

    return (
      <div className="resultados">
      <span>{modoString}</span>
      {this.props.parametros.area || this.props.parametros.bimestre? <span>{fullString}</span>:''}
      {lista.length?lista:<div>No hay elementos en la lista!</div>}
      </div>
    );
  }
}
