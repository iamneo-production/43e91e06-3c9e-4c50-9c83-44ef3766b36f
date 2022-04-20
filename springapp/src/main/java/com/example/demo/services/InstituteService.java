package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.InstituteRepository;

import com.example.demo.model.InstituteModel;

@Service
public class InstituteService {
	
	@Autowired
	public InstituteRepository instituterepository;
	
	public List<InstituteModel>getInstitutes(){
		return instituterepository.findAll();
	}
	
	public InstituteModel getInstituteById(int instituteid) {
		Optional<InstituteModel>institute = instituterepository.findById(instituteid);
		return (institute.get());
	}
	
	public InstituteModel saveInstitute(InstituteModel institute) {
		return instituterepository.save(institute);
	}
	
	public void deleteById(int instituteid) {
		instituterepository.deleteById(instituteid);
	}
	
	public InstituteModel updateInstitute(int instituteid,InstituteModel institute) {
		if(getInstituteById(institute.getInstituteid())==null) {
			return null;
		}
		InstituteModel institutes = instituterepository.save(institute);
		return institutes;
	}

}
