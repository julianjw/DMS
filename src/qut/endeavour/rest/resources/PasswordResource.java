package qut.endeavour.rest.resources;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import qut.endeavour.rest.bean.Verification;
import qut.endeavour.rest.bean.admin.PasswordChange;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.Permissions;
import qut.endeavour.rest.utility.security.PasswordUtility;
import qut.endeavour.rest.utility.security.SaltAndHash;

/**
 * This RESTful resource resides in the <b>./rest/password</b> path
 * 
 * @author Steven
 * 
 * 
 *
 */
@Path("/password")
public class PasswordResource {
	
	/**
	 * Change someone's password
	 * 
	 * Keep this commented out unless required.
	 * 
	 * @throws UnsupportedEncodingException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeySpecException
	 * @throws SQLException
	 * @throws DMSException
	 */
	@POST ///{clientid: [a-zA-Z_0-9]+}
	@Path("/changepassword/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification changePassword(
			PasswordChange pwdChange,
			@PathParam("user_id") String username,
			@PathParam("token") String token
			) {
		
		System.out.println("Changing password.");
		
		try {
		
			// verify user
			if ( !DatabaseAccess.validateUser(username, token) ) return new Verification(Verification.Verified.FAILURE);
			
			// verify old password
			if (! DatabaseAccess.loginAttempt(username, pwdChange.getOldPassword() ) ) return new Verification(Verification.Verified.FAILURE);
			
			// create new password
			SaltAndHash sah = PasswordUtility.newSaltAndHash( pwdChange.getNewPassword() );
			
			// update to new password in db
			String sql = "update user_info set password_hash = ?, salt = ? where user_id = ?";
			PreparedStatement ps = DatabaseAccess.createPreparedStatement(sql);
		
			ps.setBytes(1, sah.getHash() );
			ps.setBytes(2, sah.getSalt() );
			ps.setInt(3, DatabaseAccess.getUserIdNumberByUsername(username) );
			ps.execute();
		
		} catch ( SQLException ex ) {
			ex.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		} catch ( DMSException ex ) {
			ex.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		} catch (InvalidKeySpecException e) {
			e.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		}
		
		System.out.println("Password Updated.");
		return new Verification(Verification.Verified.SUCCESS);
	}
	
	
	/**
	 * Reset a given user's password to the default password
	 * 
	 * @param pwdChange
	 * @param username
	 * @param token
	 * @param userToChange
	 * @return
	 */
	//resetpassword/{username}/{token}/{userToChange}
	@POST ///{clientid: [a-zA-Z_0-9]+}
	@Path("/resetpassword/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{userToChange: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public Verification resetPassword(
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("userToChange") String userToChange
			) {
		
		System.out.println("PasswordResource: Resetting user "+userToChange+"'s password.");
		
		try {
		
			System.out.println("PasswordResource: Checking if loger has permission.");
			// verify user
			if ( !Permissions.canChangeUserPassword( DatabaseAccess.getRole(username, token) ) ) return new Verification(Verification.Verified.FAILURE);
			
			System.out.println("PasswordResource: Creating new salt and a default password hash.");
			// create new password
			SaltAndHash sah = PasswordUtility.newDefaultSaltAndHash();
			
			System.out.println("PasswordResource: Preparing SQL.");
			// update to new password in db
			String sql = "update user_info set password_hash = ?, salt = ? where user_id = ?";
			PreparedStatement ps = DatabaseAccess.createPreparedStatement(sql);
		
			System.out.println("PasswordResource: Putting values in prepared statement.");
			ps.setBytes(1, sah.getHash() );
			ps.setBytes(2, sah.getSalt() );
			ps.setInt(3, DatabaseAccess.getUserIdNumberByUsername(userToChange) );
			ps.execute();
		
		} catch ( SQLException ex ) {
			ex.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		} catch ( DMSException ex ) {
			ex.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		} catch (InvalidKeySpecException e) {
			e.printStackTrace();
			return new Verification(Verification.Verified.FAILURE);
		}
		
		System.out.println("PasswordResource: Password reset.");
		return new Verification(Verification.Verified.SUCCESS);
	}
}
