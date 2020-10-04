package com.anilt.ecomm.dao;

import com.anilt.ecomm.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
