package qut.endeavour.rest.bean.plan.support;

public class SupportServices {
	private String serviceName;
	private String serviceDesc;
	
	public SupportServices() {}

	public SupportServices(String serviceName, String serviceDesc) {
		this.serviceName = serviceName;
		this.serviceDesc = serviceDesc;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public String getServiceDesc() {
		return serviceDesc;
	}

	public void setServiceDesc(String serviceDesc) {
		this.serviceDesc = serviceDesc;
	}
	
	
}
