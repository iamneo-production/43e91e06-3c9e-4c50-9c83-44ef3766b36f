package com.example.demo.controllers;
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

import com.example.demo.dao.AcademyRepository;
import com.example.demo.dao.AdmissionRepository;
import com.example.demo.dao.CoursesRepository;
import com.example.demo.model.AcademyModel;
import com.example.demo.model.AdmissionModel;
import com.example.demo.model.Course;
import com.example.demo.services.AdmissionService;







@RestController
@RequestMapping("/api")
public class AdmissionController {
	@Autowired
	AdmissionService admissionService;
	 @Autowired
	    AdmissionRepository studentRepository;
	 @Autowired
	    CoursesRepository courseRepository;
	 @Autowired
	    AcademyRepository institutionRepository;
	@GetMapping("/ViewAdmissions")
	private List<AdmissionModel>getAllAdmissions(){
		return admissionService.getAllAdmissions();
	}
	
	@GetMapping("/Admission/{studentid}")
	private AdmissionModel getAdmissions(@PathVariable("studentid") int studentid)
	{
		return admissionService.getAdmissionById(studentid);
	}
	@DeleteMapping("/deleteAdmission/{studentid}")
	private void deleteAdmission(@PathVariable("studentid")int studentid)
	{
		admissionService.delete(studentid);
	}
@PostMapping("/AddAdmission")
private int saveAdmission(@RequestBody AdmissionModel admissions)
{
	admissionService.saveOrUpdate(admissions);
	return admissions.getStudentid();
	
	
}
@PutMapping("/editAdmission")
private AdmissionModel update(@RequestBody AdmissionModel admissions) {
	admissionService.saveOrUpdate(admissions);
	return admissions;
}
@PutMapping("{studentId}/courses/{courseId}")
AdmissionModel addCourseToStudent(
        @PathVariable Integer studentId,
        @PathVariable Integer courseId
) {
    AdmissionModel student = studentRepository.findById(studentId).get();
    Course course = courseRepository.findById(courseId).get();
    student.enrolledCourses.add(course);
    return studentRepository.save(student);
}

@PutMapping("/{studentId}/institution/{instituteId}")
AdmissionModel assignInstitutionToStudent(
        @PathVariable Integer studentId,
        @PathVariable Integer instituteId
) {
    AdmissionModel student = studentRepository.findById(studentId).get();
    AcademyModel institution = institutionRepository.findById(instituteId).get();
    student.setInstitution(institution);
    return studentRepository.save(student);
}
}