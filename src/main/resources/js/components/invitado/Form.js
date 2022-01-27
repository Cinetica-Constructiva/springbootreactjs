import React, { Component } from 'react';

import invitadoServices from "../services/Invitado"
import {Link} from "react-router-dom";

export default class Form extends Component {

	constructor(props){
		super(props);
		this.state = {
			fieldName:"",
			fieldPhone:"",
			errorField:[],
			selectEvento:null,
			listEvento:[]
		}
	}

async componentDidMount(){
		this.setListEvento()
	}

	async setListEvento(){
			invitadoServices.listEvento().then((res)=>{this.setState({listEvento:res})})
	
			const printHello =()=> console.log("Hello");
			setTimeout(printHello, 5000);

	}

  render() {
    return (
      <div>
      	<h5>Nuevo Invitado v2.0 {this.state.fieldName}</h5>

		<div className="row">
      <div className="col-md-6 mb-3">
      	<label htmlFor="firstName">Nombre del Invitado</label>
        	<input type="text" className="form-control" placeholder="Nombre"
            value={this.state.fieldName}
            onChange={(event)=>this.setState({fieldName:event.target.value})}/>
      </div>
    </div>

		<div className="row">
    	<div className="col-md-6 mb-3">
				<label htmlFor="phone"> Telefono </label>
	      	<input type="text" className="form-control" placeholder="099123456"
	          value={this.state.fieldPhone}
	          onChange={(event)=>this.setState({fieldPhone:event.target.value})}
	           />
      </div>
  	</div>

		<div className="row">
			<div className="col-md-6 mb-3">
				<label htmlFor="evento"> Evento</label>
					<select className="form-control"
						onChange={(event)=>this.setState({selectEvento:event.target.value})}>
								<option defaultValue>Seleccione.. </option>
						{
							this.state.listEvento.map((select)=>{
								return(
									<option key={select.id} value={JSON.stringify(select)}> {select.nombre} </option>

								)
							})
						}
					</select>
			</div>
		</div>

		{
			this.state.errorField.map((itemError)=>{
				return(
					<p className="text-warning">*{itemError}</p>
				)
			})
		}

		<div className="row">
			<div className="col-md-6 mb-3">
		  	<button
				  onClick={()=>this.onClickSave()}
				  className="btn btn-primary btn-block"
				  type="submit">
					  Guardar
				</button>
			</div>
		</div>
  </div>
    )
  }

 async  onClickSave()
 {
	const res = await invitadoServices.create(this.state)
	if(res.sucess){
		alert(res.message)
		console.log(res);
		window.location.replace("/invitado/index")
	}else if(res.status ==400){
		console.log(res.status);
		const dataError = []
		const error = res.data.console.errors;
		if(error){
			error.map((itemError)=>{
				console.log(itemError.defaultMessage);
				dataError.push(itemError.defaultMessage);
			})
			this.setState({errorField:dataError})
		}else{
			dataError.push(res.data.message)
			this.setState({errorField:dataError})
		}
	}else{
		/** alert("Error ===> "+ res.message.message)*/
		console.log(res);
		alert("Error ==>"+ JSON.stringify(res));
		const dataError = []
		dataError.push(res.message);
		this.setState({errorField:dataError});
	}
 }
}
