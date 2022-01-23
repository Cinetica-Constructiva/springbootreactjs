package com.valsis.wedd.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
//
public class HomeController {
	
	@RequestMapping(value={"/home", "/acerca"}, method=RequestMethod.GET)
	public ModelAndView home() {
		ModelAndView model = new ModelAndView();
		model.setViewName("Home");
		System.out.println("Homecontroller to html step!");
		return model;
	}
	
	
	@RequestMapping(value= {"/invitado", "/invitado/index", "/invitado/form", "invitado/edit/{id}"}, method=RequestMethod.GET)
	public ModelAndView invitado() {
		ModelAndView model = new ModelAndView();
		model.setViewName("Invitado");
		System.out.println("Invitado Controller step!");
		return model;
	}
	

}
