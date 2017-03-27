import React from 'react';
import ReactDOM from 'react-dom';
import AppBuscador from './appBuscador/appBuscador.jsx';
import Selector from './selector/selector.jsx';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state={modo:this.props.modo};
    this.manejadorSeleccion=this.manejadorSeleccion.bind(this);
  }

  manejadorSeleccion(seleccion){

  		this.setState({modo:seleccion});	
  }

  render() {
    return (
      <div>
      	{(this.state.modo=="selector")?<Selector changeHandler={this.manejadorSeleccion}/>:<AppBuscador modo={this.state.modo}/>}
      </div>
    );
  }
}

/*
$(function(){
*/


if(document.getElementById('appBuscador')){
  
ReactDOM.render(<Main modo={'selector'}/>, document.getElementById('appBuscador')); 

}
else if(document.getElementById('appBuscador-cursos')){

ReactDOM.render(<Main modo={'cursos'}/>, document.getElementById('appBuscador-cursos'));  

}
else if(document.getElementById('appBuscador-diplomados')){

ReactDOM.render(<Main modo={'diplomados'}/>, document.getElementById('appBuscador-diplomados'));  

}

//});
