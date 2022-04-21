package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.demo.services.CustomUserService;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomUserService userservice;

	@Autowired
	private JwtTokenHelper jwtTokenHelper;

	@Autowired
	private AuthenticationEntryPoint authenticationEntryPoint;

	/*
	 * @Override
	 * protected void configure(AuthenticationManagerBuilder auth) throws Exception
	 * {
	 * //In memory
	 * auth.inMemoryAuthentication().withUser("Vasanth").password(passwordEncoder().
	 * encode("raina9486")).authorities("USER","ADMIN");
	 * //database
	 * auth.userDetailsService(userservice).passwordEncoder(passwordEncoder());
	 * }
	 */

	/*
	 * @Bean
	 * public PasswordEncoder passwordEncoder() {
	 * return new BCryptPasswordEncoder();
	 * }
	 */

	@Bean
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// http.authorizeRequests().anyRequest().authenticated();

		// http.authorizeRequests((request)->request.antMatchers("/h2-console/**").permitAll().anyRequest().authenticated()).httpBasic();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
				.authenticationEntryPoint(authenticationEntryPoint).and()
				.authorizeRequests((request) -> request
						.antMatchers("h2-console/**", "/api/v1/auth/login", "api/v1/auth/dashbord", "/auth/userinfo",
								"/users/addUser", "/users/addAuthority", "/users/addAuth", "/course/viewcourses",
								"/course/addCourse", "/course/{courseid}", "/course/updatecourse/{courseid}",
								"/institute/viewinstitute", "/institute/addInstitute", "/institute/{instituteid}",
								"/institute/updateinstitute/{instituteid}",
								"/course/institute/{instituteid}", "/course/institutes/{instituteid}",
								"/users/{username}", "/student/viewStudents", "/student/addStudent",
								"/student/{studentid}", "/student/updateStudent/{studentid}",
								"/student/particular/{id}",
								"/users/update/{username}",
								"/review", "/review/course/{Course_id}/student/{student_id}", "/review/course/{id}",
								"/review/{id}", "/review/Student/{id}", "/review/{id}/{review}"

						)
						.permitAll().antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated())
				.addFilterBefore(new JWTAuthenticationFilter(userservice, jwtTokenHelper),
						UsernamePasswordAuthenticationFilter.class);

		http.cors();
		// http.formLogin();

		http.csrf().disable().headers().frameOptions().disable();
	}

}
