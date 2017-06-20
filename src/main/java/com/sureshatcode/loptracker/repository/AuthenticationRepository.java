package com.sureshatcode.loptracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sureshatcode.loptracker.model.User;

/**
 * 
 * @author Suresh Palanisamy
 *
 */
public interface AuthenticationRepository extends JpaRepository<User, Long> {

	@Query(value = "from User u where u.emailAddress = :emailAddress")
	public User findByEmailAddress(@Param("emailAddress") String emailAddress);
}
