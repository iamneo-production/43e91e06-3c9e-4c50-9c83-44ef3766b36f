package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AdmissionRepository;
import com.example.demo.model.AdmissionModel;

@Service
public class AdmissionService {
	@Autowired
	AdmissionRepository admissionRepository;

	public AdmissionModel saveUser(AdmissionModel student) {
		return admissionRepository.save(student);
	}

	public List<AdmissionModel> findUsers() {
		return admissionRepository.findAll();
	}

	public List<AdmissionModel> getUserById(long id) {
		List<AdmissionModel> students = admissionRepository.findByid(id);
		return (students);
	}

	public List<AdmissionModel> getCourseById(int courseid) {
		List<AdmissionModel> studentss = admissionRepository.findByCourseid(courseid);
		return (studentss);
	}

	public AdmissionModel getStudentById(int studentid) {
		Optional<AdmissionModel> student = admissionRepository.findByStudentid(studentid);
		return (student.get());
	}

	public AdmissionModel updateUser(int studentid, AdmissionModel student) {
		if (getStudentById(student.getStudentid()) == null) {
			return null;
		}
		AdmissionModel students = admissionRepository.save(student);
		return students;
	}

	public void deleteById(int studentid) {
		admissionRepository.deleteById(studentid);
	}

	// public AdmissionModel getStudent(int id){
	// return admissionRepository.findById(id);
	// }

}
