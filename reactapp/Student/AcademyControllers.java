package com.example.sprint4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sprint4.model.AcademyModel;
import com.example.sprint4.service.AcademyService;


@RestController
@RequestMapping("/api")
public class AcademyControllers {
	@Autowired
	AcademyService institutionService;
	@GetMapping("/viewInstitution")
	private List<AcademyModel>getAllInstitutions(){
		return institutionService.getAllInstitutions();
	}
	
	@GetMapping("/Institution/{instituteid}")
	private AcademyModel getInstitutes(@PathVariable("instituteid") int instituteid)
	{
		return institutionService.getInstitutionById(instituteid);
	}
	@DeleteMapping("/deleteInstitution/{instituteid}")
	private void deleteInstitution(@PathVariable("instituteid")int instituteid)
	{
		institutionService.delete(instituteid);
	}
     @PostMapping("/AddInstitution")
private int saveInstitution(@RequestBody AcademyModel institutions)
{
	institutionService.saveOrUpdate(institutions);
	return institutions.getInstituteid();
	
	
}
@PutMapping("/editInstitution")
private AcademyModel update(@RequestBody AcademyModel institutions) {
	institutionService.saveOrUpdate(institutions);
	return institutions;
}
}
