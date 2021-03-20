package com.anilt.component.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ComponentLibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComponentLibraryApplication.class, args);
	}
	// http://localhost:8080/cl/api/v1/components GET all
	// http://localhost:8080/cl/api/v1/components/{componentId} GET
	// http://localhost:8080/cl/api/v1/components Create
	// http://localhost:8080/cl/api/v1/components/{componentId} Update
	// http://localhost:8080/cl/api/v1/components/{componentId} Delete
}
