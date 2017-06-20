package com.sureshatcode.loptracker.daoimpl;

import java.io.Serializable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sureshatcode.loptracker.appconfig.AppDataException;
import com.sureshatcode.loptracker.dao.AuthenticationDao;
import com.sureshatcode.loptracker.model.User;
import com.sureshatcode.loptracker.repository.AuthenticationRepository;

/**
 * 
 * @author Suresh Palanisamy
 *
 */
@Repository
public class AuthenticationDaoImpl implements AuthenticationDao, Serializable {

	private static final long serialVersionUID = 1L;

	private static final Logger logTracker = LoggerFactory.getLogger(AuthenticationDaoImpl.class);

	@Autowired
	private AuthenticationRepository authenticationRepository;

	public User registerNewUser(User user) throws AppDataException {
		try {
			logTracker.debug("Signup was called in data layer");
			this.authenticationRepository.save(user);
			return user;
		} catch (Exception e) {
			logTracker.error(e.getMessage(), e);
			throw new AppDataException(e.getMessage());
		}
	}

	public User findUserByEmailAddress(String emailAddress) throws AppDataException {
		User user = null;
		try {
			logTracker.debug("Find user by email address was called in data layer");
			user = this.authenticationRepository.findByEmailAddress(emailAddress);
			return user;
		} catch (Exception e) {
			logTracker.error(e.getMessage(), e);
			throw new AppDataException(e.getMessage());
		}
	}
}