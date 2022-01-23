package com.valsis.wedd.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;






@Entity
@Table(name="invitado")
public class Invitado {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name="name")
	@NotEmpty(message="Es requerido el Nombre.")
	@Pattern(regexp="^[\\p{L} .'-]+$", message="El nombre debe contener solo letras")
	private String name;
	
	@Column(name="phone")
	private String phone;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public Invitado() {
		
	}

	public Invitado(String name, String phone) {
		super();
		
		this.name = name;
		this.phone = phone;
	}
		
	public Invitado(int id, String name, String phone) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	 
	

}
