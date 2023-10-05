package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.Student;
import com.example.demo.Repository.StudentRepository;
import com.example.demo.Service.StudentService;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
	@Autowired StudentRepository studentrep;
	@Autowired StudentService studentser;
	@PostMapping("/")
	public Student GetIn(@RequestBody Student std){
		return studentrep.save(std);
	}
	@PutMapping("/{id}")
	public Student PutFn(@PathVariable int id,@RequestBody Student std){
		return studentrep.save(std);
	}
	@GetMapping("/{id}")
	public Optional<Student> GetFn(@PathVariable int id){
		return studentrep.findById(id);
	}
	@GetMapping("/get")
	public List<Student> GeAlltFn(){
		return studentrep.findAll();
	}
	@DeleteMapping("/id")
	public String DeleteFn(@PathVariable int id) {
		 studentrep.deleteById(id);
		 return "Successfully Deleted";
		
	}
}
