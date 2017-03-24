import React from 'react';

export default class PrimerItem extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

  	var actividadDestacada = this.props.actividadDestacada;


    return (
      <div id="evento_destacado">
      <div className="contenedor_evento">
        <img className="img_evento" width="100%" src={actividadDestacada.fotoURL}/>
        <div className="info_evento">
          <div className="detalle_evento">
            <h3><a href={""+actividadDestacada.URL}>{actividadDestacada.titulo}</a></h3>
            <p>{actividadDestacada.contenido}</p>
            <h5><small>Fecha: </small><br/>{actividadDestacada.fecha}</h5>
            <a href={""+actividadDestacada.URL} className="cta_evento">Ver mas</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
