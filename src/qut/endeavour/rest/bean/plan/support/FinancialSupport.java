package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class FinancialSupport {
	private String financialAdmin;
	private String budgetExpend;
	private String budgetConstraintGoal;
	private String personalItemsSupport;
	private String budgetTransport;
	private String moneyHandlingSupport;
	private String budgeting;
	private String budgetGroceries;
	private String budgetHouse;
	private String budgetUtilities;
	private String budgetBills;
	private String budgetEmergency;
	private String budgetSupportNetwork;
	private String otherRequirements;
	
	public FinancialSupport() {}

	public FinancialSupport(String financialAdmin, String budgetExpend,
			String budgetConstraintGoal, String personalItemsSupport,
			String budgetTransport, String moneyHandlingSupport,
			String budgeting, String budgetGroceries, String budgetHouse,
			String budgetUtilities, String budgetBills, String budgetEmergency,
			String budgetSupportNetwork, String otherRequirements) {
		this.financialAdmin = financialAdmin;
		this.budgetExpend = budgetExpend;
		this.budgetConstraintGoal = budgetConstraintGoal;
		this.personalItemsSupport = personalItemsSupport;
		this.budgetTransport = budgetTransport;
		this.moneyHandlingSupport = moneyHandlingSupport;
		this.budgeting = budgeting;
		this.budgetGroceries = budgetGroceries;
		this.budgetHouse = budgetHouse;
		this.budgetUtilities = budgetUtilities;
		this.budgetBills = budgetBills;
		this.budgetEmergency = budgetEmergency;
		this.budgetSupportNetwork = budgetSupportNetwork;
		this.otherRequirements = otherRequirements;
	}

	public String getFinancialAdmin() {
		return financialAdmin;
	}

	public void setFinancialAdmin(String financialAdmin) {
		this.financialAdmin = financialAdmin;
	}

	public String getBudgetExpend() {
		return budgetExpend;
	}

	public void setBudgetExpend(String budgetExpend) {
		this.budgetExpend = budgetExpend;
	}

	public String getBudgetConstraintGoal() {
		return budgetConstraintGoal;
	}

	public void setBudgetConstraintGoal(String budgetConstraintGoal) {
		this.budgetConstraintGoal = budgetConstraintGoal;
	}

	public String getPersonalItemsSupport() {
		return personalItemsSupport;
	}

	public void setPersonalItemsSupport(String personalItemsSupport) {
		this.personalItemsSupport = personalItemsSupport;
	}

	public String getBudgetTransport() {
		return budgetTransport;
	}

	public void setBudgetTransport(String budgetTransport) {
		this.budgetTransport = budgetTransport;
	}

	public String getMoneyHandlingSupport() {
		return moneyHandlingSupport;
	}

	public void setMoneyHandlingSupport(String moneyHandlingSupport) {
		this.moneyHandlingSupport = moneyHandlingSupport;
	}

	public String getBudgeting() {
		return budgeting;
	}

	public void setBudgeting(String budgeting) {
		this.budgeting = budgeting;
	}

	public String getBudgetGroceries() {
		return budgetGroceries;
	}

	public void setBudgetGroceries(String budgetGroceries) {
		this.budgetGroceries = budgetGroceries;
	}

	public String getBudgetHouse() {
		return budgetHouse;
	}

	public void setBudgetHouse(String budgetHouse) {
		this.budgetHouse = budgetHouse;
	}

	public String getBudgetUtilities() {
		return budgetUtilities;
	}

	public void setBudgetUtilities(String budgetUtilities) {
		this.budgetUtilities = budgetUtilities;
	}

	public String getBudgetBills() {
		return budgetBills;
	}

	public void setBudgetBills(String budgetBills) {
		this.budgetBills = budgetBills;
	}

	public String getBudgetEmergency() {
		return budgetEmergency;
	}

	public void setBudgetEmergency(String budgetEmergency) {
		this.budgetEmergency = budgetEmergency;
	}

	public String getBudgetSupportNetwork() {
		return budgetSupportNetwork;
	}

	public void setBudgetSupportNetwork(String budgetSupportNetwork) {
		this.budgetSupportNetwork = budgetSupportNetwork;
	}

	public String getOtherRequirements() {
		return otherRequirements;
	}

	public void setOtherRequirements(String otherRequirements) {
		this.otherRequirements = otherRequirements;
	}
}
