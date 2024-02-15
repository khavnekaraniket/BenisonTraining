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

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Add other methods as needed for business logic
}

