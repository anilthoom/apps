package com.anilt.component.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ComponentLibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComponentLibraryApplication.class, args);
	}
	// http://localhost:8080/cl/api/v1/components GET all components
	// http://localhost:8080/cl/api/v1/components/{componentId} GET component by ID
	// http://localhost:8080/cl/api/v1/components Create { "contentHtml":"This is HTML3 content", "contentText":"This is TEXT3 content" }
	// http://localhost:8080/cl/api/v1/components/{componentId} Update component API
	// http://localhost:8080/cl/api/v1/components/{componentId} Delete component
}
