package qut.endeavour.rest.storage;

public class RoleRecord {
	public Integer roleId;
	public String role;
	public String details;
	
	RoleRecord(Integer roleId, String role, String details){
		this.roleId = roleId;
		this.role = role;
		this.details = details;
	}
}