package com.anilt.component.library.repository;

import com.anilt.component.library.model.ComponentLibrary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComponentLibraryRepository extends JpaRepository<ComponentLibrary, Long> {
}
