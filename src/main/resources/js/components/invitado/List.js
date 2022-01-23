import React, { Component } from 'react';

import invitadoServices from "../services/Invitado";
import {Link} from "react-router-dom";

export default class List extends Component {
  
  constructor(){
    super()
    this.state={
      listInvitados:[]
    }
  }

  async componentDidMount(){
    console.log("Listado montado");
    const res = await invitadoServices.list()
    console.log(res);
    if(res.success){
      this.setState({listInvitados:res.list})
    }else{
      alert("Error ===> "+res.message);
    }
  }
  render() {
    return (
      <section className="sectionList">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.listInvitados.map((data)=>{
                return (
          
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>
                <Link className='btn btn-outline-info' to={"/invitado/edit/"+data.id}> Editar </Link>
                
                <a onClick={()=> this.onClickDelete(data.id)} href="/invitado/index/#" className="btn btn-danger"> Borrar </a>
              </td>
            </tr>
              )  
          })
        }
          </tbody>
        </table>
      </section>
    )
  }
  async onClickDelete(id){
    var yes = confirm("Esta seguro de borrar la informacion?");
    if(yes === true){
      const res= await invitadoServices.delete(id);
      if(res.success){
        alert(res.message)
        const list = this.state.listInvitados;
        list.splice(i,1);
        this.setState({listInvitados:list})
      }else{
        console.log(res);
        alert(JSON.stringify(res))
      }
    }
  }
}
