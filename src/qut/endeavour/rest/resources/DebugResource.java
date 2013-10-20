package qut.endeavour.rest.resources;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.UriInfo;

import qut.endeavour.rest.bean.AuthResponse;
import qut.endeavour.rest.bean.AuthToken;
import qut.endeavour.rest.bean.Verification;
import qut.endeavour.rest.bean.admin.Authentication;
import qut.endeavour.rest.bean.admin.DMSUser;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.factory.AuthFactory;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.security.PasswordUtility;
import qut.endeavour.rest.utility.security.SaltAndHash;

/**
 * This RESTful resource resides in the <b>./rest/auth</b> path
 * 
 * @author Steven
 * 
 * 
 *
 */
@Path("/debug")
public class DebugResource {
	
	/**
	 * RESET ALL PASSWORDS TO 'password'
	 * 
	 * Keep this commented out unless required.
	 * 
	 * @throws UnsupportedEncodingException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeySpecException
	 * @throws SQLException
	 * @throws DMSException
	 *//*
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public void validate() throws UnsupportedEncodingException, NoSuchAlgorithmException, InvalidKeySpecException, SQLException, DMSException {
		
		List<Integer> userIds = getUserIds();
		
		System.out.println("Creating new hash.");
		
		SaltAndHash sah = PasswordUtility.newSaltAndHash("password");
		StringBuilder sb = new StringBuilder();
	    
		for (byte b : sah.getSalt() ) {
	        sb.append( String.format("%02x ", b ));
	    }
	    System.out.println("Salt: " + sb.toString());
	    
	    sb = new StringBuilder();
	    
	    for (byte b : sah.getHash() ) {
	        sb.append( String.format("%02x ", b ));
	    }
	    System.out.println("Hash: " + sb.toString());
		
		String sql = "update user_info set password_hash = ?, salt = ? where user_id = ?";
		PreparedStatement ps = DatabaseAccess.createPreparedStatement(sql);
		
		for ( Integer userId : userIds ) {
			ps.setBytes(1, sah.getHash());
			ps.setBytes(2, sah.getSalt());
			ps.setInt(3, userId);
			ps.execute();
			System.out.println("Updated user: " + userId);
		}
		
		System.out.println("Finished successfully.");
	}/**/

	private List<Integer> getUserIds() throws SQLException, DMSException {
		List<Integer> userIds = new ArrayList<Integer>();
		
		String sql = "select user_id from user_info";
		PreparedStatement ps = DatabaseAccess.createPreparedStatement(sql);
		
		ResultSet rs = ps.executeQuery();
		
		while (rs.next()){
			userIds.add( rs.getInt(1) );
		}
		
		return userIds;
	}
	
	
}
