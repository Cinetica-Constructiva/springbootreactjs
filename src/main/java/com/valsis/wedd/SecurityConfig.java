/**
 * 
 */
package com.valsis.wedd;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * @author rafa
 *
 */
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	public void configure(HttpSecurity http) throws Exception{
		http.authorizeRequests()
		.antMatchers("/public").permitAll()
		.antMatchers("/home").hasRole("ADMIN")
		.antMatchers("/invitado").hasRole("USER")
		.antMatchers("/api/**").hasRole("USER")
		.and().csrf().disable()
		.logout()
		.and()
		.formLogin();
	}

}
