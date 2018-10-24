/**
 * 
 */
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Car;
import com.example.demo.service.CarService;

/**
 * @author User
 *
 */

@RestController
public class CarController {
	@Autowired
	private CarService carServiceImpl;

	@RequestMapping("/Car")
	public String greeting() {
		StringBuilder sb = new StringBuilder();
		for (Car c : carServiceImpl.getAllCars()) {
			sb.append(c.getModel());
		}
		return sb.toString();
	}

}
