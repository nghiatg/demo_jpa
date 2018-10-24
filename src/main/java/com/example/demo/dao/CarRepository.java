/**
 * 
 */
package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Car;

/**
 * @author User
 *
 */

public interface CarRepository extends JpaRepository<Car, Integer> {
	List<Car> findByMaker(String maker);
}
