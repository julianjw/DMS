package qut.endeavour.rest.storage;

public class ContactTypeRecord {
	public Integer cTypeId;
	public String cType;
	public String typeDetails;
	
	ContactTypeRecord(Integer cTypeId, String cType, String typeDetails){
		this.cTypeId = cTypeId;
		this.cType = cType;
		this.typeDetails = typeDetails;
	}
}
