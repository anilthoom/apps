package com.anilt.component.library.controller;

import com.anilt.component.library.exception.ResourceNotFoundException;
import com.anilt.component.library.model.ComponentLibrary;
import com.anilt.component.library.repository.ComponentLibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class ComponentLibController {

    @Autowired
    private ComponentLibraryRepository componentLibraryRepository;

    @GetMapping("/components")
    public List<ComponentLibrary> getAllComponentLibraries(){
        return componentLibraryRepository.findAll();
    }

    @GetMapping("/components/{id}")
    public ResponseEntity<ComponentLibrary> getComponentLibraryById(@PathVariable(value = "id") Long componentId)
            throws ResourceNotFoundException {
        ComponentLibrary componentLibrary = componentLibraryRepository.findById(componentId)
                .orElseThrow(()->new ResourceNotFoundException("Component not found with the id :: "+componentId));
        return ResponseEntity.ok().body(componentLibrary);
    }

    @PostMapping("/components")
    public ComponentLibrary createComponent(@Valid @RequestBody ComponentLibrary componentLibrary){
        return componentLibraryRepository.save(componentLibrary);
    }

    @PutMapping("/components/{id}")
    public ResponseEntity<ComponentLibrary> updateComponent(@PathVariable(value = "id") Long componentId,
                                                   @Valid @RequestBody ComponentLibrary componentLibraryDetails) throws ResourceNotFoundException {
        ComponentLibrary componentLibrary = componentLibraryRepository.findById(componentId)
                .orElseThrow(() -> new ResourceNotFoundException("Component not found with the id :: " + componentId));

        componentLibrary.setContentText(componentLibraryDetails.getContentText());
        componentLibrary.setContentHtml(componentLibraryDetails.getContentHtml());
        final ComponentLibrary updatedComponent = componentLibraryRepository.save(componentLibrary);
        return ResponseEntity.ok(updatedComponent);
    }

    @DeleteMapping("/components/{id}")
    public Map<String, Boolean> deleteComponent(@PathVariable(value = "id") Long componentId)
            throws ResourceNotFoundException {
        ComponentLibrary componentLibrary = componentLibraryRepository.findById(componentId)
                .orElseThrow(() -> new ResourceNotFoundException("Component not found with the id :: " + componentId));

        componentLibraryRepository.delete(componentLibrary);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
