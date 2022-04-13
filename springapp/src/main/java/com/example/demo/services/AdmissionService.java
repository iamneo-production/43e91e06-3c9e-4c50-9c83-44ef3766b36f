package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AdmissionRepository;
import com.example.demo.model.AdmissionModel;







@Service
public class AdmissionService {
	@Autowired
	AdmissionRepository admissionRepository;

	public List<AdmissionModel> getAllAdmissions() {
		List<AdmissionModel>admissions=new ArrayList<AdmissionModel>();
		admissionRepository.findAll().forEach(admissions1->admissions.add(admissions1));
		return admissions;
	}

	public AdmissionModel getAdmissionById(int studentid) {
		return admissionRepository.findById(studentid).get();
	}

	public void saveOrUpdate(AdmissionModel admissions) {
		
		admissionRepository.save(admissions);
		
	}

	public void delete(int studentid) {
		
		admissionRepository.deleteById(studentid);
		
	}
	public void update(AdmissionModel admissions ,int studentid)
	{
		admissionRepository.save(admissions);
	}
	
	

}
