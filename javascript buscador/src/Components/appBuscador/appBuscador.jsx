import React from 'react';
import Filtros from '../filtros/filtros.jsx';
import ListaResultados from '../listaResultados/listaResultados.jsx';
import TituloBuscador from '../tituloBuscador/titulobuscador.jsx';

class AppBuscador extends React.Component{

	constructor(props){
		super(props);
		this.makeCall=this.makeCall.bind(this);
		this.setFilters=this.setFilters.bind(this);
		this.obtenerListaFiltrada = this.obtenerListaFiltrada.bind(this);
	}

	makeCall(){

		var elemento=this.props.modo;
	 	fetch('http://webit.diplomadosuc.cl/resultados-filtro/?q='+elemento).then(response =>{
	 		
	 		response.json().then(valor=>{

					this.setState({[elemento]:valor[elemento]});

	 		});
	 		
	
		});
	}

	setFilters(filter){
		

		var filters= this.state.filtros? Object.assign({},this.state.filtros, filter): filter;

		this.setState({filtros:filters});

	}

	obtenerListaFiltrada(){

		return this.state[this.props.modo].filter(elemento=>{

			if(this.state.filtros.area && !this.state.filtros.bimestre){

					if(this.state.filtros.area == elemento.areaID || this.state.filtros.area=='all'){

				return true;
			}
}
			else if(!this.state.filtros.area && this.state.filtros.bimestre){

					if(this.state.filtros.bimestre == elemento.bimestre || this.state.filtros.bimestre=='all'){

				return true;
			}
			}
			
			else if(this.state.filtros.area && this.state.filtros.bimestre){

			if((this.state.filtros.area == elemento.areaID || this.state.filtros.area=='all') &&( this.state.filtros.bimestre == elemento.bimestre || this.state.filtros.bimestre=='all')){

				return true;
			}
		}


		});

	}


	componentWillMount(){

		fetch('http://webit.diplomadosuc.cl/resultados-filtro/?q=areas').then(response =>{
	 		
	 		response.json().then(valor=>{
					this.setState({areas:valor.areas});

	 		});
					});
	}

	render(){


		if(this.state && this.state[this.props.modo]){
					var listaFiltrada=this.obtenerListaFiltrada();					
					var hayResultados=listaFiltrada.length;	
					}

		if(this.state){
					var clientSideCall=(this.state && (this.state[this.props.modo] != undefined));
						
					}

console.log("(this.state && (this.state[this.props.modo] != undefined)", (this.state && (this.state[this.props.modo] != undefined)));

		return (
			<div className="wraper">

				{listaFiltrada ? <TituloBuscador areas={this.state.areas} parametros={this.state.filtros} modo={this.props.modo} hayResultados={hayResultados}/>:<div className="titulobuscador"><h1>Busca {this.props.modo} en Clase Ejecutiva</h1></div>}
				{listaFiltrada ? <ListaResultados arrayResultados={listaFiltrada} />: null}
				{(this.state && this.state.areas)?<Filtros areas={this.state.areas} setFilters={this.setFilters} modo={this.props.modo} makeCall={this.makeCall} clientSideCall={clientSideCall}/>:''}
							
				</div>)
	}
	

}

export default AppBuscador;