import React from 'react';

export default class Item extends React.Component {
 


  constructor(props) {
    super(props);
  }



  render() {

    var Actividad = this.props.actividad;
    
    return (
    	<li>
    	<div className="contenedor_evento">
					<img className="img_evento" width="100%" src={Actividad.fotoURL}/>
					<div className="info_evento">
						<div className="detalle_evento">
							<h3>{Actividad.titulo}</h3>
							<span><a href={""+Actividad.URL}>{Actividad.titulo}</a></span>
							<p>{Actividad.contenido}</p>
							<h5>{Actividad.fecha}</h5>
						</div>
					</div>
				</div>
		</li>
    );
  }
}
