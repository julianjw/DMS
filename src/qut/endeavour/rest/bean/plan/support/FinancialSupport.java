package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class FinancialSupport {
	private String FinancialAdmin;
	private String BudgetExpend;
	private String BudgetGoals;
	private String PersonalItemsSupport;
	private String BudgetTransport;
	private String MoneyHandlingSupport;
	private String Budgeting;
	private String BudgetGroceries;
	private String BudgetHouse;
	private String BudgetUtilities;
	private String BudgetBills;
	private String BudgetEmergency;
	private String BudgetSupportNetwork;
	private String OtherRequirements;
	
	/**
	 * 
	 * @param FinancialAdmin
	 * @param BudgetExpend
	 * @param BudgetGoals
	 * @param PersonalItemsSupport
	 * @param BudgetTransport
	 * @param MoneyHandlingSupport
	 * @param Budgeting
	 * @param BudgetGroceries
	 * @param BudgetHouse
	 * @param BudgetUtilities
	 * @param BudgetBills
	 * @param BudgetEmergency
	 * @param BudgetSupportNetwork
	 * @param OtherRequirements
	 */
	public FinancialSupport(
			String FinancialAdmin,
			String BudgetExpend,
			String BudgetGoals,
			String PersonalItemsSupport,
			String BudgetTransport,
			String MoneyHandlingSupport,
			String Budgeting,
			String BudgetGroceries,
			String BudgetHouse,
			String BudgetUtilities,
			String BudgetBills,
			String BudgetEmergency,
			String BudgetSupportNetwork,
			String OtherRequirements
			) {
		
		this.FinancialAdmin = FinancialAdmin;
		this.BudgetExpend = BudgetExpend;
		this.BudgetGoals = BudgetGoals;
		this.PersonalItemsSupport = PersonalItemsSupport;
		this.BudgetTransport = BudgetTransport;
		this.MoneyHandlingSupport = MoneyHandlingSupport;
		this.Budgeting = Budgeting;
		this.BudgetGroceries = BudgetGroceries;
		this.BudgetHouse = BudgetHouse;
		this.BudgetUtilities = BudgetUtilities;
		this.BudgetBills = BudgetBills;
		this.BudgetEmergency = BudgetEmergency;
		this.BudgetSupportNetwork = BudgetSupportNetwork;
		this.OtherRequirements = OtherRequirements;
		
	}
	
	
	
	public FinancialSupport() {}
	
	
	
	public String getFinancialAdmin() {
		return this.FinancialAdmin;
	}
	public void setFinancialAdmin( String FinancialAdmin ) {
		this.FinancialAdmin = FinancialAdmin;
	}
	
	
	
	public String getBudgetExpend() {
		return this.BudgetExpend;
	}
	public void setBudgetExpend( String BudgetExpend ) {
		this.BudgetExpend = BudgetExpend;
	}
	
	
	
	public String getBudgetGoals() {
		return this.BudgetGoals;
	}
	public void setBudgetGoals( String BudgetGoals ) {
		this.BudgetGoals = BudgetGoals;
	}
	
	
	
	public String getPersonalItemsSupport() {
		return this.PersonalItemsSupport;
	}
	public void setPersonalItemsSupport( String PersonalItemsSupport ) {
		this.PersonalItemsSupport = PersonalItemsSupport;
	}
	
	
	
	public String getBudgetTransport() {
		return this.BudgetTransport;
	}
	public void setBudgetTransport( String BudgetTransport ) {
		this.BudgetTransport = BudgetTransport;
	}
	
	
	
	public String getMoneyHandlingSupport() {
		return this.MoneyHandlingSupport;
	}
	public void setMoneyHandlingSupport(String MoneyHandlingSupport) {
		this.MoneyHandlingSupport = MoneyHandlingSupport;
	}
	
	
	
	public String getBudgeting() {
		return this.Budgeting;
	}
	public void setBudgeting( String Budgeting ) {
		this.Budgeting = Budgeting;
	}
	
	
	
	public String getBudgetGroceries() {
		return this.BudgetGroceries;
	}
	public void setBudgetGroceries( String BudgetGroceries ) {
		this.BudgetGroceries = BudgetGroceries;
	}
	
	
	
	public String getBudgetHouse() {
		return this.BudgetHouse;
	}
	public void setBudgetHouse( String BudgetHouse ) {
		this.BudgetHouse = BudgetHouse;
	}
	
	
	
	public String getBudgetUtilities() {
		return this.BudgetUtilities;
	}
	public void setBudgetUtilities( String BudgetUtilities ) {
		this.BudgetUtilities = BudgetUtilities;
	}
	
	
	
	public String getBudgetBills() {
		return this.BudgetBills;
	}
	public void setBudgetBills( String BudgetBills ) {
		this.BudgetBills = BudgetBills;
	}
	
	
	
	public String getBudgetEmergency() {
		return this.BudgetEmergency;
	}
	public void setBudgetEmergency(String BudgetEmergency) {
		this.BudgetEmergency = BudgetEmergency;
	}
	
	
	
	public String getBudgetSupportNetwork() {
		return this.BudgetSupportNetwork;
	}
	public void setBudgetSupportNetwork(String BudgetSupportNetwork) {
		this.BudgetSupportNetwork = BudgetSupportNetwork;
	}
	
	
	
	public String getOtherRequirements() {
		return this.OtherRequirements;
	}
	public void setOtherRequirements(String OtherRequirements) {
		this.OtherRequirements = OtherRequirements;
	}
}
