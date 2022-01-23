package com.valsis.wedd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.valsis.wedd.model.Invitado;
import com.valsis.wedd.repository.InvitadoRepository;

@SpringBootApplication
public class WeddApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(WeddApplication.class, args);
	}
	
	@Autowired
	private InvitadoRepository invitadoRepo;
	

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Invitado invitado1 = new Invitado("coco", "123456");
		invitadoRepo.save(invitado1);
		
		Invitado invitado2 = new Invitado("mimi", "2323232");
		invitadoRepo.save(invitado2); 
		
		
	}

}
