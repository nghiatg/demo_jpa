/**
 * 
 */
package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CarRepository;
import com.example.demo.model.Car;

/**
 * @author User
 *
 */
@Service
public class CarServiceImpl implements CarService {
	@Autowired
	private CarRepository carRepository;


	/*
	 * (non-Javadoc)
	 * 
	 * @see com.example.demo.service.CarService#getAllCars()
	 */
	@Override
	public List<Car> getAllCars() {
		return carRepository.findAll();
	}

}
