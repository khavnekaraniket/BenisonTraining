package com.example.demo.entities;

import java.util.Date;

//import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;

//@JsonDeserialize(builder = Project.ProjectBuilder.class)
@Entity
@Builder
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column
	private String name;

	@Column
	private Date start_date;

	private Project() {
    }
	
//	 public static ProjectBuilder builder() {
//	        return new ProjectBuilder();
//	    }

	public int getId() {
		return id;
	}

	public Project(int id, String name, Date start_date) {
		super();
		this.id = id;
		this.name = name;
		this.start_date = start_date;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

//	 @JsonPOJOBuilder(withPrefix = "")
//	    public static class ProjectBuilder {
//
//	        private int id;
//	        private String name;
//	        private Date start_date;
//			private String description;
//
//	        public ProjectBuilder id(int id) {
//	            this.id = id;
//	            return this;
//	        }
//
//	        public ProjectBuilder name(String name) {
//	            this.name = name;
//	            return this;
//	        }
//
//	        public ProjectBuilder startDate(Date start_date) {
//	            this.start_date = start_date;
//	            return this;
//	        }
//	        
//	        public ProjectBuilder description(String description) { // Setter for description
//	            this.description = description;
//	            return this;
//	        }
//	        public Project build() {
//	            Project project = new Project();
//	            project.setId(this.id);
//	            project.setName(this.name);
//	            project.setStart_date(this.start_date);
//	            return project;
//	        }

}
