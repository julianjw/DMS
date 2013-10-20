/* MOST OF THE CODE IN THIS FILE COMES FROM
 * 
 * PBKDF2 salted password hashing.
 * Author: havoc AT defuse.ca
 * www: http://crackstation.net/hashing-security.htm
 */
package qut.endeavour.rest.utility.security;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.Random;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import qut.endeavour.rest.exception.DMSClientErrorException;

public class PasswordUtility {

	public static final String PBKDF2_ALGORITHM = "PBKDF2WithHmacSHA1";
	
	private static final int SALT_BYTE_SIZE = 24;
	private static final int HASH_BYTE_SIZE = 24;
	
	private static final int ITERATIONS = 1021;
	
	/**
	 * create a new salt and hash object 
	 * 
	 * @param password
	 * @return
	 * @throws UnsupportedEncodingException
	 * @throws InvalidKeySpecException 
	 * @throws NoSuchAlgorithmException 
	 */
	public static SaltAndHash newSaltAndHash( String password ) throws UnsupportedEncodingException, NoSuchAlgorithmException, InvalidKeySpecException {
		byte[] salt = generateSalt();
		byte[] hash = generatePasswordHash( password.toCharArray(), salt, ITERATIONS, HASH_BYTE_SIZE );
		return new SaltAndHash( salt, hash );
	}

	/**
	 * Compare password against hash from another source
	 * 
	 * @param sah
	 * @param password
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeySpecException
	 */
	public static boolean compareAgainstHash( SaltAndHash sah, String password ) throws NoSuchAlgorithmException, InvalidKeySpecException {
		byte[] pwdHash =  generatePasswordHash( password.toCharArray(), sah.getSalt(), ITERATIONS, HASH_BYTE_SIZE );
		return Arrays.equals( sah.getHash(), pwdHash );
	}

	/**
	 * create a hash from a password and a salt
	 * 
	 * @param password
	 * @param salt
	 * @param iterations
	 * @param bytes
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeySpecException
	 */
	private static byte[] generatePasswordHash(char[] password, byte[] salt,
			int iterations, int bytes) throws NoSuchAlgorithmException, InvalidKeySpecException {
		PBEKeySpec spec = new PBEKeySpec(password, salt, iterations, bytes * 8);
        SecretKeyFactory skf = SecretKeyFactory.getInstance(PBKDF2_ALGORITHM);
        return skf.generateSecret(spec).getEncoded();
		
	}

	/**
	 * 
	 * @param size
	 * @return
	 */
	private static byte[] generateSalt() {
		SecureRandom random = new SecureRandom();
        byte[] salt = new byte[SALT_BYTE_SIZE];
        random.nextBytes(salt);
		return salt;
	}

}
