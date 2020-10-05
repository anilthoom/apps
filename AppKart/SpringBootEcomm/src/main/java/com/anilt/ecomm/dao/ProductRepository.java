package com.anilt.ecomm.dao;

import com.anilt.ecomm.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Query method match by category id
    // auto generated REST end point would be : /api/products/search/findByCategoryId?id=1
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
}
