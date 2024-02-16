//package com.example.demo.controllers;
//
//
//
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import com.example.demo.entities.Project;
//import com.example.demo.services.ProjectService;
//
//@RestController
//@RequestMapping("/api")
//public class ProjectController {
//	@Autowired
//	ProjectService pserv ;
//	
//	@GetMapping("/hello")
//	public List<Project>getAll()
//	{
//		return pserv.getAll();
//	}
//	
//	@GetMapping("/take")
//	public String getAlls()
//	{
//		return "Aniket";
//	}
//}
package com.example.demo.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Project;
import com.example.demo.services.ProjectService;
import java.util.List;

@RestController
//@RequestMapping("/api")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@GetMapping("/projects")
	public List<Project> getAllProjects() {
		return projectService.getAllProjects();
	}

	@PostMapping("create")
	public ResponseEntity<Project> createProject(@RequestBody Project project) {
		System.out.println(project);
		Project savedProject = projectService.createProject(project);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedProject);
	}

	@GetMapping("/projects/{projectId}")
	public ResponseEntity<Project> getProjectById(@PathVariable Integer projectId) {
		Project project = projectService.getProjectById(projectId);
		if (project != null) {
			return ResponseEntity.ok(project);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
//	@GetMapping("/projects/{projectId}")
//	public Project getProjectById(@PathVariable int projectId) {
//	    return projectService.getProjectById(projectId);
//	}

	@GetMapping("/")
	public String simpleGet() {
		return "Aniket";
	}
}
