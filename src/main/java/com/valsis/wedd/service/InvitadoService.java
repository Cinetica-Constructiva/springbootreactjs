package com.valsis.wedd.service;

import com.valsis.wedd.model.Invitado;
import java.util.List;
import java.util.Optional;


//@Service
public interface InvitadoService {
	/** Listar */
	List<Invitado> getList();
	/** Guardar */
	Invitado saveInvitado(Invitado invitado);
	/** Obtener registro */
	public Optional<Invitado> getInvitado(int id);
	/** Borrar */
	void delete(int id);
	/** Buscar por Telefono */
    Optional<Invitado> findByPhone(String phone);
	/** Actualizar */
	Invitado updateInvitado(Invitado invitado);

		
}
