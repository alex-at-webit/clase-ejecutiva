import React from 'react';

export default class PrimerItem extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

  	var actividadDestacada = this.props.actividadDestacada;


    return (
      <div id="seminario_destacado">
      <div className="contenedor_seminario">
        <img className="img_seminario" width="100%" src={actividadDestacada.fotoURL}/>
        <div className="info_seminario">
          <div className="detalle_seminario">
            <h3>{actividadDestacada.titulo}</h3>
            <p>Lorem ipsum dolor sit amet, <a href={""+actividadDestacada.URL}> consectetur adipisicing</a> elit. Aperiam nihil laboriosam vel sit, corporis voluptatem tempora aliquid, laudantium facilis excepturi at adipisci tempore dolorem amet. Voluptates dignissimos atque, cumque dolore.</p>
            <h5><small>Fecha: </small><br/>{actividadDestacada.fecha}</h5>
            <a href={""+actividadDestacada.URL} className="cta_seminario">Call to Action Seminario</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
