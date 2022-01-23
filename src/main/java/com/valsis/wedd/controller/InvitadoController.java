 package com.valsis.wedd.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.valsis.wedd.model.Invitado;
import com.valsis.wedd.service.InvitadoService;

@RestController
@RequestMapping("/api/invitados")
public class InvitadoController {
	
	@Autowired
	private InvitadoService invitadoService;
	
	public InvitadoController(InvitadoService invitadoService) {
		super();
		this.invitadoService = invitadoService;
		// TODO Auto-generated constructor stub
	}

	@GetMapping(value="/list")
	public Map<String, Object> list(){
		HashMap<String,Object> response = new HashMap<String, Object>();
		try {
			List<Invitado> invitados;
			invitados = invitadoService.getList();
			response.put("message", "Listado satisfactorio");
			response.put("list", invitados);
			response.put("success", true);
			return response;
		}catch(Exception e) {
			response.put("message", e.getMessage());
			response.put("success ", false);
			return response;
			
		}
	}

	@GetMapping(value="get/{id}")
	public Map<String, Object> data(@PathVariable("id") int id){
		HashMap<String,Object> response = new HashMap<String,Object>();
		try {
			Optional<Invitado> invitado = invitadoService.getInvitado(id);

			if(invitado.isPresent()){
				response.put("message", "Actualizado correcto");
				response.put("data", invitado);
				response.put("success", true);
				return response;
			}else{
				response.put("message", "Datos no encontrados, no se pudo actualizar.");
				response.put("data", null);
				response.put("success", false);
				return response;
			}
			
		} catch (Exception e) {
			response.put("message", ""+e.getMessage());
			response.put("success", false);
			return response;
		}
	}
	
	@DeleteMapping(value="/delete/{id}")
	public Map<String, Object> delete(@PathVariable("id") int id){
		HashMap<String, Object> response = new HashMap<String, Object>();
		try {
			invitadoService.delete(id);
			response.put("message", "Borrado favorablemente.");
			response.put("success", true);
			return response;
		} catch (Exception e) {
			
			response.put("message", e.getMessage());
			response.put("success", false);
			return response;
		}
	}


	@GetMapping
	public List<Invitado> getInvitados(){
		List<Invitado> invitados = invitadoService.getList();
		return invitados;
	}
	
	@PostMapping("/")
	public ResponseEntity<Invitado> saveInvitado(@RequestBody Invitado invitado){
		return new ResponseEntity<Invitado> (invitadoService.saveInvitado(invitado), HttpStatus.CREATED);
	}

	@PostMapping("/create")
	public HashMap<String, Object> create(@RequestBody Invitado invitado){

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {

			Optional<Invitado> validPhone = invitadoService.findByPhone(invitado.getPhone());

			if(validPhone.isPresent()){
				response.put("message", "El numero ingresado, " + invitado.getPhone()+ "ya existe, por favor ingreso uno diferente.");
				response.put("success", false);
				return response;
			}else{
				response.put("message", "Guadado exitoso.");
				response.put("success", true);
				invitadoService.saveInvitado(invitado);
			  return response;
			}

		} catch (Exception e) {
			response.put("message", "Error de guardado: " + e.getMessage());
			response.put("success", false);
			return response;
		}
	}

	@PutMapping(value="/update/{id}")
	public HashMap<String,Object> update(@RequestBody Invitado invitado){
		HashMap<String,Object> response = new HashMap<String,Object>();
		try{
			Optional<Invitado> validPhone = invitadoService.findByPhone(invitado.getPhone());

			if(validPhone.isPresent()){
				response.put("message", "El numero ingresado, " + invitado.getPhone()+ "ya existe, por favor ingreso uno diferente.");
				response.put("success", false);
				return response;
			}else{
				response.put("message", "Guadado exitoso.");
				response.put("success", true);
				invitadoService.updateInvitado(invitado);
			  return response;
			}
		}catch(Exception e){
			response.put("message", "Error de guardado: " + e.getMessage());
			response.put("success", false);
			return response;
		}

	}

	/**
	@PostMapping("/create")
	public ResponseEntity<String> create(@RequestBody Invitado invitado){
		try {
			System.out.print("Guardado de datos");
			invitadoService.saveInvitado(invitado);
			return new ResponseEntity<>("Save succesfull", HttpStatus.OK);
		}catch(Exception e){
			System.out.println(e);
			return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
			
		}
	}*/
}
