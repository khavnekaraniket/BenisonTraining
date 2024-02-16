package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Project;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Integer> {
//	 @Query("SELECT p FROM Project p WHERE p.id = :id")
//	    List<Project> findByProjectId(int id);
}
