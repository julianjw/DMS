package qut.endeavour.rest.exception;

public class DMSException extends Exception {
	
	public DMSException() {
		super("DMSException");
	}
	
	public DMSException(String message) {
		super("DMSException: "+message);
	}
	
	public String toString() {
		return super.toString();
	}
}
