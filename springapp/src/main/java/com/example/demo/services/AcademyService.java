package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AcademyRepository;
import com.example.demo.model.AcademyModel;



@Service
public class AcademyService {
	@Autowired
	AcademyRepository institutionRepository;

	public List<AcademyModel> getAllInstitutions() {
		List<AcademyModel>institutions=new ArrayList<AcademyModel>();
		institutionRepository.findAll().forEach(institutions1->institutions.add(institutions1));
		return institutions;
	}

	public AcademyModel getInstitutionById(int instituteid) {
		return institutionRepository.findById(instituteid).get();
	}

	public void saveOrUpdate(AcademyModel institutions) {
		// TODO Auto-generated method stub
		institutionRepository.save(institutions);
		
	}

	public void delete(int instituteid) {
		// TODO Auto-generated method stub
		institutionRepository.deleteById(instituteid);
		
	}
	public void update(AcademyModel institutions ,int instituteid)
	{
		institutionRepository.save(institutions);
	}
	
	

}
