
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
import com.example.demo.repositories.ProjectRepo;
import com.example.demo.services.ProjectService;
import java.util.List;

@RestController

public class ProjectController {

	@Autowired
	private ProjectService projectService;
	private ProjectRepo projectRepository;
	

    @Autowired
    public ProjectController(ProjectRepo projectRepository) {
        this.projectRepository = projectRepository;
    }

	@GetMapping("/projects")
	public List<Project> getAllProjects() {
		return projectService.getAllProjects();
	}



	@PostMapping("/projects")
	public ResponseEntity<Project> createProject(@RequestBody Project project) {
	    Project savedProject = projectRepository.save(project);
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
	
	

	@GetMapping("/")
	public String simpleGet() {
		return "Aniket";
	}
}
