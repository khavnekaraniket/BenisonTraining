//package com.example.demo.controllers;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
    
 @GetMapping("/")
    public String simpleGet() {
        return "Aniket";
    }
}