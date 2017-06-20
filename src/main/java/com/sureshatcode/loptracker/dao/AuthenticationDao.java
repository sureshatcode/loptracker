package com.sureshatcode.loptracker.dao;

import com.sureshatcode.loptracker.appconfig.AppDataException;
import com.sureshatcode.loptracker.model.User;

/**
 * 
 * @author Suresh Palanisamy
 *
 */
public interface AuthenticationDao {

	public User registerNewUser(User user) throws AppDataException;

	public User findUserByEmailAddress(String emailAddress) throws AppDataException;
}