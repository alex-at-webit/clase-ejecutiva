import React from 'react';
import Item from '../Item/Item.jsx';
import PrimerItem from '../PrimerItem/PrimerItem.jsx';

export default class ListaItems extends React.Component {

  constructor(props) {
    super(props);
  }

   


  render() {

    var actividadDestacada= this.props.actividades[0];

    var masActividades= this.props.actividades.filter((value, index)=>{

      return (index>0);

    });

    return (

  <section id="seminarios">
      <h2>Seminarios</h2>
  <PrimerItem actividadDestacada={actividadDestacada}/>
      <ul>
      {masActividades.map((value, index)=>{

        return <Item actividad={value} key={value.ID}/>;

      })
    }
    </ul>

     </section>
    );
  }
}
