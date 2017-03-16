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
            <h3><a href={""+actividadDestacada.URL}>{actividadDestacada.titulo}</a></h3>
            <p>{actividadDestacada.contenido}</p>
            <h5><small>Fecha: </small><br/>{actividadDestacada.fecha}</h5>
            <a href={""+actividadDestacada.URL} className="cta_seminario">Ver mas</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
