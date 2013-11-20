package qut.endeavour.rest.storage;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class DatabaseDetails {
	private static volatile DatabaseDetails instance = null;
	
	private static final String CONFIG_FILE = "/dbProperties/db.properties";
	
	private static final String HOST_FLD = "host";
	private static final String PORT_FLD = "port";
	private static final String DATABASE_FLD = "database";
	private static final String USERNAME_FLD = "username";
	private static final String PASSWORD_FLD = "password";
	
	private static volatile boolean error;
	
	private String host;
	private String port;
	private String database;
	private String username;
	private String password;
	
	private DatabaseDetails() {
		
		error = false;
		
		host = null;
		port = null;
		database = null;
		username = null;
		password = null;
		
		
		Properties props = new Properties();
		
		try {
			//props.load( ClassLoader.getSystemResourceAsStream( CONFIG_FILE ) );
			props.load( new FileInputStream ( CONFIG_FILE ) );
			
			host = props.getProperty(HOST_FLD);
			port = props.getProperty(PORT_FLD);
			database = props.getProperty(DATABASE_FLD);
			username = props.getProperty(USERNAME_FLD);
			password = props.getProperty(PASSWORD_FLD);
			
			
		} catch (FileNotFoundException e) {
			System.out.println("Cannot find file \"" + CONFIG_FILE + "\". Make sure file exists in WEB-INF directory, and this directory is part ");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("Cannot read from \"" + CONFIG_FILE + "\". IO Exception." );
			e.printStackTrace();
		} finally {
			if ( 	host == null ||
					port == null ||
					database == null ||
					username == null ||
					password == null ) {
				System.out.println("Database configuration file (\"" + CONFIG_FILE + "\") has returned null values.");
				error = true;
			}
		}
	}
	
	public static DatabaseDetails getInstance() {
		if ( instance == null ) {
			synchronized ( DatabaseDetails.class ) {
				if ( instance == null ) {
					instance = new DatabaseDetails();
				}
			}
		} else if ( error ) {
			instance = new DatabaseDetails(); // try to reload if there was an error last time.
		}
		
		return instance;
	}
	
	
	public String getHost() {
		return host;
	}
	
	public String getPort() {
		return port;
	}
	
	public String getDatabase() {
		return database;
	}
	
	public String getUsername() {
		return username;
	}
	
	public String getPassword() {
		return password;
	}
	
}
