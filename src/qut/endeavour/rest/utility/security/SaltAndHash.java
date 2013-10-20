package qut.endeavour.rest.utility.security;

public class SaltAndHash {
	
	byte[] hash;
	byte[] salt;
	
	public SaltAndHash(byte[] salt, byte[] hash ) {
		super();
		this.hash = hash;
		this.salt = salt;
	}
	
	public byte[] getHash() {
		return hash;
	}
	
	public byte[] getSalt() {
		return salt;
	}
	
	
	
	
	
	
}
