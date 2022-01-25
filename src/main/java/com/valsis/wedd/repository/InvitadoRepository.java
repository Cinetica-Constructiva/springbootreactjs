package com.valsis.wedd.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import com.valsis.wedd.model.Evento;
import com.valsis.wedd.model.Invitado;

@Repository
public interface InvitadoRepository extends JpaRepository <Invitado, Integer>{

    Optional<Invitado> findByPhone(String phone);

    @Query("from Evento")
	List<Evento> findAllEvento();

    

}
