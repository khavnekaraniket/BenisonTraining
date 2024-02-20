//package com.example.demo.services;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.entities.Project;
//import com.example.demo.repositories.ProjectRepo;
//
//import jakarta.transaction.Transactional;
//@Service
//@Transactional
//public class ProjectService {
//	
//	 @Autowired
//	 ProjectRepo ProjectRepo;
//	 
//	 public List<Project>getAll()
//		{
//			return ProjectRepo.findAll();
//		}
//
//}

package com.example.demo.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Project;
import com.example.demo.repositories.ProjectRepo;

import jakarta.transaction.Transactional;

import java.util.List;

@Service

public class ProjectService {

    @Autowired
    private ProjectRepo projectRepository;


    public Project createProject(Project project) {
		return projectRepository.save(project);
	}
    
//	public List<Project> getByProjectId(int id)
//	{
////		return (List<Project>) projectRepository.getById(id);
//    	return projectRepository.findByProjectId(id);
//	}
    
    public Project getProjectById(Integer id) {
		return projectRepository.findById(id).orElse(null);
	}
    
    
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }


//	public Project getProjectById(int projectId) {
//		// Auto-generated method stub
//		return (Project) projectRepository.findByProjectId(projectId);;
//	}

    // Add other methods as needed for business logic
}

