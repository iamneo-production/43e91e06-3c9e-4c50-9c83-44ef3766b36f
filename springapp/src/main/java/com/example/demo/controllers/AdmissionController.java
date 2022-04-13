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

import com.example.demo.model.AdmissionModel;
import com.example.demo.services.AdmissionService;






@CrossOrigin
@RestController
@RequestMapping("/student")
public class AdmissionController {
	@Autowired
	AdmissionService admissionService;

	
	@GetMapping("/viewStudents")
	public List<AdmissionModel> findAllUsers(){
		return admissionService.findUsers();
	}
	
	@GetMapping("/{studentid}")
	public AdmissionModel getUserById(@PathVariable int studentid) {
		return admissionService.getStudentById(studentid);
	}
	
	@PostMapping("/addStudent")
	public AdmissionModel addUser(@RequestBody AdmissionModel student) {
		return admissionService.saveUser(student);
	}
	
	@GetMapping("/particular/{id}")
	public ResponseEntity<List<AdmissionModel>> getById(@PathVariable long id) {
		return ResponseEntity.ok(admissionService.getUserById(id));
	}
	
	@DeleteMapping("/{studentid}")
	public void deleteUser(@PathVariable int studentid) {
		admissionService.deleteById(studentid);
	}
	
	@PutMapping("/updateStudent/{studentid}")
	public ResponseEntity<AdmissionModel> updateStudent(@PathVariable int studentid,AdmissionModel student) {
		AdmissionModel students = admissionService.getStudentById(studentid);
		students.setStudentName(student.getStudentName());
		students.setStudentDoB(student.getStudentDoB());
		students.setAddress(student.getAddress());
		students.setMobile(student.getMobile());
		students.setHsc(student.getHsc());
		students.setSslc(students.getSslc());
		students.setEligibility(student.getEligibility());
		AdmissionModel updatestudent = admissionService.saveUser(students);
		return ResponseEntity.ok(updatestudent);
	}
}