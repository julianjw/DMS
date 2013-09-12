package qut.endeavour.rest.resources;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.UriInfo;

import qut.endeavour.rest.bean.AuthResponse;
import qut.endeavour.rest.bean.AuthToken;
import qut.endeavour.rest.factory.AuthResponseFactory;
import qut.endeavour.rest.factory.AuthTokenFactory;


@Path("/auth")
public class AuthResource {

	@Context
	UriInfo uriInfo;
	
	@Context
	Request request;
	
	private final String USER_ID_FIELD = "user_id";
	private final String PASSWORD_FIELD = "password";
	private final String AUTH_TOKEN_FIELD = "auth_token";
	
	private final String VALID_USER_REDIRECT = "../";
	private final String INVALID_USER_REDIRECT = "../";
	
	
	
	/**
	 * validates if the current token & userid match and are valid.
	 * @param uriInfo
	 * @return
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public AuthResponse validate( @Context UriInfo uriInfo ) {
		
		MultivaluedMap<String, String> params = uriInfo.getQueryParameters();
		
		String token = params.getFirst(AUTH_TOKEN_FIELD);
		String user_id = params.getFirst(USER_ID_FIELD);
		
		return AuthResponseFactory.authToken(token, user_id);
	}
	
	
	
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public void authRequest(
			@FormParam(USER_ID_FIELD) String userId,
			@FormParam(PASSWORD_FIELD) String passowrd,
			@Context HttpServletResponse response )
					throws IOException {
		
		boolean validLogin = false;
		
		// generate token
		AuthToken t = AuthTokenFactory.makeToken();
		
		// connect to server
		
		// check if login details are valid ( validation )
		validLogin = true;
		
		// redirect user to first page
		if ( validLogin ) {
			// store token as active session
			
			response.sendRedirect(VALID_USER_REDIRECT + "?" + AUTH_TOKEN_FIELD + "=" + t.getTokenId());
		} else {
			response.sendRedirect(INVALID_USER_REDIRECT);
		}
		
	}
	
}
