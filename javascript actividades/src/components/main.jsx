import React from 'react';
import ReactDOM from 'react-dom';
import ActividadesApp from './ActividadesApp/ActividadesApp.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);

 
  }

   spanishDate(d){
  var weekday=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
  var monthname=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  return weekday[d.getDay()]+" "+d.getDate()+" de "+monthname[d.getMonth()]+" de "+d.getFullYear()
}


componentDidMount(){

	   fetch('http://webit.diplomadosuc.cl/resultados-actividades/').then(response =>{
	 		
	 		response.json().then(valor=>{

           console.log(valor.seminarios);



          if(valor.seminarios){
            
            var seminarios = valor.seminarios.sort((a, b)=>{

             var fechaA= new Date(""+a.fecha);
             var fechaB= new Date(""+b.fecha);


              return fechaA - fechaB;
            });

          var seminarios = valor.seminarios.map((value, index)=>{

            value.fecha = this.spanishDate(new Date(""+value.fecha));
             return value;
          });}

          if(valor.charlas){

            var charlas = valor.seminarios.sort((a, b)=>{

             var fechaA= new Date(""+a.fecha);
             var fechaB= new Date(""+b.fecha);


              return fechaA - fechaB;
            });
          
             charlas = valor.charlas.map((value, index)=>{
          
                     value.fecha = this.spanishDate(new Date(""+value.fecha));
                       return value;
                    });
          }

 
					this.setState({data:{seminarios,charlas}});
	 		});
		});
}



  render() {

    var modo = window.location.hash.substr(1);
    modo = modo===""? "seminarios":modo;

    return (<div>
      {this.state && this.state.data? <ActividadesApp actividades={this.state.data} modo={modo}/> :null}
      </div>
    );
  }
}


ReactDOM.render(<Main/>, document.getElementById('Actividades'))