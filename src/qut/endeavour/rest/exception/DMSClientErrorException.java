package qut.endeavour.rest.exception;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;

import com.sun.jersey.api.Responses;


public class DMSClientErrorException extends WebApplicationException {

	  /**
	  * Create a HTTP 404 (Not Found) exception.
	  * @param message the String that is the entity of the 404 response.
	  */
	  public DMSClientErrorException(String message) {
		  super(Response.status(Responses.CLIENT_ERROR).entity( "{\"error\":\"" + message + "\"}").type("application/json").build() );
	  }
	
}