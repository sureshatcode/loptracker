package com.sureshatcode.loptracker.serviceimpl;

import java.io.Serializable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sureshatcode.loptracker.appconfig.AppDataException;
import com.sureshatcode.loptracker.appconfig.AppServiceException;
import com.sureshatcode.loptracker.dao.AuthenticationDao;
import com.sureshatcode.loptracker.model.User;
import com.sureshatcode.loptracker.service.AuthenticationService;

/**
 * 
 * @author Suresh Palanisamy
 *
 */
@Service
public class AuthenticationServiceImpl implements AuthenticationService, Serializable {

	private static final long serialVersionUID = 1L;

	private static final Logger logTracker = LoggerFactory.getLogger(AuthenticationServiceImpl.class);

	@Autowired
	private AuthenticationDao authenticationDao;

	/**
	 * @param user
	 * @return user
	 */
	public User doRegisterNewUser(User user) throws AppServiceException {
		try {
			logTracker.debug("Signup was called in service layer");
			this.authenticationDao.registerNewUser(user);
			return user;
		} catch (AppDataException e) {
			logTracker.error(e.getMessage(), e);
			throw new AppServiceException(e.getMessage());
		}
	}

	public User doLoginRegisteredUser(User user) throws AppServiceException {
		User foundUser = null;
		try {
			logTracker.debug("Login was called in service layer");
			foundUser = this.authenticationDao.findUserByEmailAddress(user.getEmailAddress());
			if (foundUser != null && user.getEmailAddress().equalsIgnoreCase(foundUser.getEmailAddress())) {
				if (!user.getPassword().equals(foundUser.getPassword())) {
					throw new AppDataException("Invalid credentials.");
				} else {
					foundUser.setPassword(null);
				}
			} else {
				throw new AppDataException("You're not registered with us.");
			}
			return foundUser;
		} catch (AppDataException e) {
			logTracker.error(e.getMessage(), e);
			throw new AppServiceException(e.getMessage());
		}
	}
}