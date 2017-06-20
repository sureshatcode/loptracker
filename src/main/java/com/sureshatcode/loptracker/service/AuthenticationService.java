package com.sureshatcode.loptracker.service;

import com.sureshatcode.loptracker.appconfig.AppServiceException;
import com.sureshatcode.loptracker.model.User;

/**
 * 
 * @author Suresh Palanisamy
 *
 */
public interface AuthenticationService {

	public User doRegisterNewUser(User user) throws AppServiceException;

	public User doLoginRegisteredUser(User user) throws AppServiceException;
}