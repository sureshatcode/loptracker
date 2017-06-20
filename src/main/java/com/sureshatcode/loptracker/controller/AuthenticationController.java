package com.sureshatcode.loptracker.controller;

import java.io.Serializable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sureshatcode.loptracker.appconfig.AppConstants;
import com.sureshatcode.loptracker.appconfig.AppResponse;
import com.sureshatcode.loptracker.appconfig.AppServiceException;
import com.sureshatcode.loptracker.model.User;
import com.sureshatcode.loptracker.service.AuthenticationService;

/**
 * 
 * @author Suresh Palanisamy
 *
 */
@RestController
@RequestMapping(value = "/core/authentication/")
public class AuthenticationController implements Serializable {

	private static final long serialVersionUID = 1L;
	private static final Logger logTracker = LoggerFactory.getLogger(AuthenticationController.class);

	@Autowired
	private AuthenticationService authenticationService;

	/**
	 * @param user
	 * @return appResponse
	 */
	@PostMapping(value = "signup", produces = "application/json")
	public AppResponse registerNewUser(@RequestBody User user) {
		AppResponse appResponse = new AppResponse();
		try {
			logTracker.debug("Signup was called in controller layer");
			authenticationService.doRegisterNewUser(user);

			appResponse.setCode(AppConstants.REQ_SUCCESS_CODE);
			appResponse.setMessage("User registered successfully.");
			appResponse.setData(null);
		} catch (AppServiceException e) {
			appResponse.setCode(AppConstants.SYSTEM_ERROR_CODE);
			appResponse.setMessage(e.getMessage());
			appResponse.setData(null);
			logTracker.error("Exception: " + e.getMessage(), e);
		}
		return appResponse;
	}

	@PostMapping(value = "login", produces = "application/json")
	public AppResponse loginRegisteredUser(@RequestBody User user) {
		AppResponse appResponse = new AppResponse();
		User loggedInUser = null;
		try {
			logTracker.debug("Login was called in controller layer");
			loggedInUser = authenticationService.doLoginRegisteredUser(user);
			
			appResponse.setCode(AppConstants.REQ_SUCCESS_CODE);
			appResponse.setMessage("User logged in successfully.");
			appResponse.setData(loggedInUser);
		} catch (AppServiceException e) {
			appResponse.setCode(AppConstants.SYSTEM_ERROR_CODE);
			appResponse.setMessage(e.getMessage());
			appResponse.setData(null);
			logTracker.error("Exception: " + e.getMessage(), e);
		}
		return appResponse;
	}
}