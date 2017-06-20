package com.sureshatcode.loptracker.appconfig;

/**
 * 
 * @author Suresh Palanisamy
 *
 */
public class AppDataException extends Exception {

	private static final long serialVersionUID = 1L;

	/**
	 * Super
	 */
	public AppDataException() {
		super();
	}

	/**
	 * @param message
	 */
	public AppDataException(String message) {
		super(message);
	}

	/**
	 * @param exception
	 */
	public AppDataException(Throwable exception) {
		super(exception);
	}

	/**
	 * @param message
	 * @param exception
	 */
	public AppDataException(String message, Throwable exception) {
		super(message, exception);
	}
}