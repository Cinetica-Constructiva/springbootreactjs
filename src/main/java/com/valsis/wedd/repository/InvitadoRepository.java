package com.valsis.wedd.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import com.valsis.wedd.model.Invitado;
@Repository
public interface InvitadoRepository extends JpaRepository <Invitado, Integer>{

    Optional<Invitado> findByPhone(String phone);

    

}
