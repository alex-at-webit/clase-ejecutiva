import React from 'react';

export default class ActividadDestacada extends React.Component {
 
  constructor(props) {
    super(props);
  }


  spanishDate(d){
	var weekday=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var monthname=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

	return weekday[d.getDay()]+" "+d.getDate()+" de "+monthname[d.getMonth()]+" de "+d.getFullYear();
}

  render() {

  	var Actividad= this.props.actividad;
  	//Actividad.fecha = this.spanishDate(new Date(Actividad.fecha));

    return (

    	<section id="charla_destacada">
		<div className="charla">
			<div className="imagen">
				<img src={Actividad.fotoURL} alt="Charla Destacada"/>
			</div>
			<div className="texto">
				<h3>{Actividad.titulo}</h3>
				<p>{Actividad.contenido}</p>
				<h5><small>Fecha: </small>{Actividad.fecha}</h5>
				<a href={""+Actividad.URL}>Ver mas</a>
			</div>
		</div>
	</section>
    );
  }
}
