package com.valsis.wedd.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="evento")
public class Evento {
		
	@Override
	public String toString() {
		return "Evento [id=" + id + ", nombre=" + nombre + "]";
	}

	@javax.persistence.Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	public int id;
	
	@Column(name="nombre_evento")
	public String nombre;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Evento(int id, String nombre) {
		super();
		this.id = id;
		this.nombre = nombre;
	}

	
	public Evento(){
		super();
	}

	public Evento(String nombre){
		this.nombre = nombre;
	}


	public boolean equals(Object anObject) {
		return nombre.equals(anObject);
	}

	public int hashCode() {
		return nombre.hashCode();
	}
	
	
	

}
