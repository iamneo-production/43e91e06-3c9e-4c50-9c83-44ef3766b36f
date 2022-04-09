package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.InstituteModel;
import com.example.demo.services.InstituteService;

@RestController
@CrossOrigin
@RequestMapping("/institute")
public class InstituteController {
	
	@Autowired
	public InstituteService instituteservice;
	
	@GetMapping("/viewinstitute")
	public List<InstituteModel>findAllCourses(){
		return instituteservice.getInstitutes();
	}
	
	@GetMapping("/{instituteid}")
	public InstituteModel getInstituteById(@PathVariable int instituteid) {
		return instituteservice.getInstituteById(instituteid);
	}
	
	@PostMapping("/addInstitute")
	public InstituteModel addInstitute(@RequestBody InstituteModel institute) {
		return instituteservice.saveInstitute(institute);
	}
	
	@DeleteMapping("/{instituteid}")
	public void deleteById(@PathVariable int instituteid) {
		instituteservice.deleteById(instituteid);
	}
	
	@PutMapping("/updateinstitute/{instituteid}")
	public ResponseEntity<InstituteModel>editInstitute(@RequestBody InstituteModel institute,@PathVariable int instituteid){
		InstituteModel institutes = instituteservice.getInstituteById(instituteid);
		institutes.setInstitutename(institute.getInstitutename());
		institutes.setInstitutedescription(institute.getInstitutedescription());
		institutes.setInstituteaddress(institute.getInstituteaddress());
		InstituteModel updatedInstitute = instituteservice.saveInstitute(institutes);
		return ResponseEntity.ok(updatedInstitute);
	}

}
