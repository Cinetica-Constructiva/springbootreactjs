package com.valsis.wedd.serviceImpl;

import com.valsis.wedd.model.Invitado;
import com.valsis.wedd.service.InvitadoService;
import com.valsis.wedd.repository.InvitadoRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvitadoServiceImpl implements InvitadoService {
	
	@Autowired
	private InvitadoRepository invitadoRepo;
	
	@Override
	public List<Invitado> getList(){
		List<Invitado> invitados = invitadoRepo.findAll();
		return invitados;
	}
	
	@Override
	public Invitado saveInvitado(Invitado invitado) {
		return (Invitado) invitadoRepo.save(invitado);
	}

	@Override 
	public Optional<Invitado> getInvitado(int id){
		Optional<Invitado> invitado = invitadoRepo.findById(id);
		return invitado;
	}

	@Override
	public void delete(int id) {
		invitadoRepo.deleteById(id);
	}

	@Override
	public Optional<Invitado> findByPhone(String phone) {
		
		Optional<Invitado> invitado = invitadoRepo.findByPhone(phone);
		return invitado;
	}	
	
	@Override
	public Invitado updateInvitado(Invitado invitado) {
		return (Invitado) invitadoRepo.saveAndFlush(invitado);
	}

}
