import React, { Component } from 'react';

import invitadoServices from "../services/Invitado"

export default class Form extends Component {

	constructor(){
		super();
		this.state = {
			fieldName:"",
			fieldPhone:"",
			errorField:[],
		}
	}

  render() {
    return (
      <div>
      <h5>Nuevo Invitado v1.0 {this.state.fieldName}</h5>
        
		<div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">Name invitado</label>
            <input type="text" className="form-control" placeholder="Name"
            value={this.state.fieldName}
            onChange={(event)=>this.setState({fieldName:event.target.value})}/>
          </div>
        </div>

				

		<div className="row">
          <div className="col-md-6 mb-3">
			<label htmlFor="phone">Phone </label>
	          <input type="text" className="form-control" placeholder="123467890"
	          value={this.state.fieldPhone}
	          onChange={(event)=>this.setState({fieldPhone:event.target.value})}
	           />
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

/**  onClickSave()
{
	const res = await invitadoServices.create(this.state)
	if(res.sucess){
		alert(res.message)
		window.location.replace("/invitado/index")
	}else{
		alert("Error ===> "+ res.message.message)
	}
	
}*/
