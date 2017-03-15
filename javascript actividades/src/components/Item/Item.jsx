import React from 'react';

export default class Item extends React.Component {
 


  constructor(props) {
    super(props);
  }



  render() {

    var Actividad = this.props.actividad;
    
    return (
    	<li>
    	<div className="contenedor_seminario">
					<img className="img_seminario" width="100%" src={Actividad.fotoURL}/>
					<div className="info_seminario">
						<div className="detalle_seminario">
							<h3>{Actividad.titulo}</h3>
							<span>{Actividad.titulo}</span>
							<p>Lorem ipsum dolor sit amet, <a href={""+Actividad.URL}> consectetur adipisicing</a> elit. Aperiam nihil laboriosam vel sit, corporis voluptatem tempora aliquid, laudantium facilis excepturi.</p>
							<h5>{Actividad.fecha}</h5>
						</div>
					</div>
				</div>
		</li>
    );
  }
}
