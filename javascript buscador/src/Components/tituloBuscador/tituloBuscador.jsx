import React from 'react';

export default class TituloBuscador extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

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

        if(area==null){
          areaString='sin area';
        }else{
          areaString=' del area '+area;

        }
  			
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
            
      <div className="titulobuscador">  
      {this.props.parametros.area || this.props.parametros.bimestre? <h1>{modoString+' '+fullString}</h1>:<h1>{modoString}</h1>}
      {this.props.hayResultados? null : <p>No hay elementos en la lista!</p>}
      </div>
    );
  }
}
