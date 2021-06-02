package com.anil.pp.repository;
import com.anil.pp.model.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Integer>
{
}