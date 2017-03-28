import React from 'react';

export default class ElementoResultados extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="itemresultado">
					<h3 className="tituloresultado">{this.props.titulo}</h3>
					<p className="descripcionresultado">{this.props.bajada}</p>
					<div className="profesorresultado">Profesores:{this.props.profesores.map((profesor, index)=>{
            return <div className="profesorindividual" key={profesor[0]}><span className="teacher">{profesor[0]}</span> <span className="degree">{profesor[1]}</span></div>;
          })}</div>
					<a href={this.props.URL} className="masinforesultado">Más información</a>
				</li>
    );
  }
}
