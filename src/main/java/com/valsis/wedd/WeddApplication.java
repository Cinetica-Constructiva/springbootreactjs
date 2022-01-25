package com.valsis.wedd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.valsis.wedd.model.Evento;
import com.valsis.wedd.model.Invitado;
import com.valsis.wedd.repository.InvitadoRepository;
import com.valsis.wedd.repository.EventoRepository;

@SpringBootApplication
public class WeddApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(WeddApplication.class, args);
	}
	
	@Autowired
	private InvitadoRepository invitadoRepo;

	@Autowired
	private EventoRepository eventoRepo;
	

	@Override
	public void run(String... args) throws Exception {
		// Evento datos de prueba
		Evento evento1 = new Evento("El Clasico.");
		Evento evento2 = new Evento("Amistoso");

		eventoRepo.save(evento1);
		eventoRepo.save(evento2);

		

		Invitado invitado1 = new Invitado(0, "coco", "123456", evento1);
		invitadoRepo.save(invitado1);
		
		Invitado invitado2 = new Invitado(0, "mimi", "2323232", evento2);
		invitadoRepo.save(invitado2); 
		
		
	}

}
