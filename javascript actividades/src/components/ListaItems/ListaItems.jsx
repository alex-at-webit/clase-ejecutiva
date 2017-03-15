import React from 'react';
import Item from '../Item/Item.jsx';
import PrimerItem from '../PrimerItem/PrimerItem.jsx';

export default class ListaItems extends React.Component {

  constructor(props) {
    super(props);
  }

   


  render() {

    if(this.props.actividades){
        var actividadDestacada= this.props.actividades[0];
    
        var masActividades= this.props.actividades.filter((value, index)=>{
    
          return (index>0);
    
        });


       var actividadesNormales= masActividades.map((value, index)=>{

          return <Item actividad={value} key={value.ID}/>;

          });
      }
      else{
        actividadesNormales=null;
      }

      var Modo=this.props.modoLista === "seminarios"?"Seminarios":"Charlas";


    return (
      <section id="seminarios">
        <h2>{Modo}</h2>
        {actividadDestacada?<PrimerItem actividadDestacada={actividadDestacada}/>:null}
        <ul>
        {actividadesNormales}
        </ul>
     </section>
    );
  }
}
