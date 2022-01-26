import React, { Component } from 'react';

import invitadoServices from "../services/Invitado";
import {Link} from "react-router-dom";

export default class Edit extends Component {

  constructor(props){
    super(props);
    this.state={
      id:0,
      fieldName:"",
      fieldPhone:"",
      selectEvento:null,
      listEvento:[]
    }
  }

  async componentDidMount(){
    console.log("Montaje de edicion correcto.");
    // se obtiene el id por parametro en la url
    // Cargar listado de eventos
    this.setListEvento();
    //const id = this.props.match.params.id;
    const path = window.location.pathname.split('/')
    const id = path[path.length - 1]
    // se trae el objeto que corresponde al id
    const res = await invitadoServices.get(id)
    console.log(res);
    if(res.success){
      console.log(res.data);
      this.setState({
        id: res.data.id,
        fieldName:res.data.name,
        fieldPhone:res.data.phone,
        selectEvento: res.data.evento
      })
    }else{
      alert("Error ==> "+res.message);
      console.log(res.data);
      console.log("No se obtubo la informacion requerida.")
    }
  }

  async setListEvento(){
      invitadoServices.listEvento().then((res)=>{this.setState({listEvento:res})})
  }

  render() {

  /**   let userId = Number(this.state.id);*/
  /**{userId} */
    return (
      <div>
        <h4>Editar Invitado </h4>
        <hr />

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="fieldName">Nombre de Invitado</label>
            <input type="text" className="form-control"
              value={this.state.fieldName}
              onChange={(event)=>this.setState({fieldName:event.target.value})}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="fieldPhone">Cel de Contacto</label>
            <input type="text" className="form-control"
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
    						<option selected>Cargando.. </option>
    						{
    							this.state.listEvento.map((select)=>{
    								return(
    									<option value={JSON.stringify(select)}> {select.nombre} </option>

    								)
    							})
    						}
    					</select>
    			</div>
    		</div>

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
	const res = await invitadoServices.update(this.state)
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
