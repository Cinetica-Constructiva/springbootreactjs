const baseUrl="http://localhost:8080/api/invitados"

import axios from "axios";

const invitado = {}

/** Listar Eventos */
invitado.listEvento = async() => {
  const urlEvento = baseUrl+"/evento"
  const res = await axios.get(urlEvento)
  .then(response =>{return response.data})
  .catch(error => {return error})
  return res;
}

/** Invitados */
/** List */
invitado.list = async () =>{
  const urlList = baseUrl+"/list";
  const res = await axios.get(urlList)
    .then(response=>{return response.data})
    .catch(error=>{return error;})
    return res;
}

/** Delete */
invitado.delete = async(id)=>{
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=>{return response.data})
  .catch(error=>{return error})
}

/** Get */
invitado.get = async (id) =>{
  const urlGet = baseUrl+"/get/"+id
  const res = await axios.get(urlGet)
  .then(response=>{return response.data})
  .catch(error=>{return error;})
  return res;
}

/** Update */
invitado.update = async(state)=>{

   const datapost ={
    id: state.id,
    name: state.fieldName,
    phone: state.fieldPhone,
    evento: JSON.parse(state.selectEvento)
   }

   const urlUpdate = baseUrl+"/update/"+state.id
   const res = await axios.put(urlUpdate, datapost)
   .then(response=>{return response.data})
   .catch(error=>{return error.response})

   return res;
}

/** Create */
invitado.create = async(state)=>{

  const datapost ={
   name: state.fieldName,
   phone: state.fieldPhone,
   evento: JSON.parse(state.selectEvento)
  }

 const urlPost = baseUrl+"/create";

  const res = await axios.post(urlPost, datapost)
  .then(response=>{return response.data;})
  .catch(error=>{return error.response;})

  return res;
}

/**

 Create
invitado.create = async(state)=>{

   const datapost ={
    name: state.fieldName,
    phone: state.fieldPhone
   }

  const urlPost = baseUrl+"/create";

  const res = await axios.post(urlPost, datapost)
  .then(response=>{
    const data = {succes: true, message: response.data}
    return data;
  })
  .catch(error =>{
    const data = {
      success:false,
      error:response.data+ data.fieldName + data.fieldPhone+ urlPost};
      console.log( "Error en los datos: "+ response.data+ data.fieldName + data.fieldPhone+ urlPost);

    return data;
  })
  return res;
}
*/
/**
async onClickSave()
{
	const res = await invitadoServices.create(this.state)
	if(res.sucess){
		alert(res.message)
		window.location.replace("/invitado/index")
	}else{
		alert("Error ===> "+ res.message.message)
	}
} */



export default invitado;
