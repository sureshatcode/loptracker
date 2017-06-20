package com.sureshatcode.loptracker.appconfig;

/**
 * 
 * @author Suresh Palanisamy
 *
 */
public class AppServiceException extends Exception {

	private static final long serialVersionUID = 1L;

	/**
	 * Super
	 */
	public AppServiceException() {
		super();
	}

	/**
	 * @param message
	 */
	public AppServiceException(String message) {
		super(message);
	}

	/**
	 * @param exception
	 */
	public AppServiceException(Throwable exception) {
		super(exception);
	}

	/**
	 * @param message
	 * @param exception
	 */
	public AppServiceException(String message, Throwable exception) {
		super(message, exception);
	}
}
