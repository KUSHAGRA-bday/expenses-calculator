function calculateExpenses() {
  const getNumber = (id) => parseFloat(document.getElementById(id).value) || 0;

  // Revenue in crores converted to rupees
  const revenueCrores = getNumber("revenue");
  const revenue = revenueCrores * 1e7;

  // Calculate salaries by department (employees * avg salary)
  const accountsSalary = getNumber("accounts-employees") * getNumber("accounts-salary");
  const operationsSalary = getNumber("operations-employees") * getNumber("operations-salary");
  const backendSalary = getNumber("backend-employees") * getNumber("backend-salary");
  const adminSalary = getNumber("admin-employees") * getNumber("admin-salary");
  const hrSalary = getNumber("hr-employees") * getNumber("hr-salary");
  const managementSalary = getNumber("management-employees") * getNumber("management-salary");
  const salesSalary = getNumber("sales-employees") * getNumber("sales-salary");

  // Rent expense
  const rent = getNumber("rent");

  // Sum all salaries
  const totalSalary = accountsSalary + operationsSalary + backendSalary + adminSalary + hrSalary + managementSalary + salesSalary;

  // Total expenses = total salary + rent
  const totalExpenses = totalSalary + rent;

  // Profit and profit margin calculation
  const profit = revenue - totalExpenses;
  const profitMargin = revenue > 0 ? ((profit / revenue) * 100).toFixed(2) : 0;

  // Display results
  document.getElementById("display-revenue").textContent = revenue.toLocaleString();
  document.getElementById("total-expenses").textContent = totalExpenses.toLocaleString();
  document.getElementById("profit").textContent = profit.toLocaleString();
  document.getElementById("profit-margin").textContent = profitMargin;

  // Show breakdown of salaries and rent
  const breakdownList = document.getElementById("breakdown-list");
  breakdownList.innerHTML = `
    <li>Accounts Dept Salary: ₹${accountsSalary.toLocaleString()}</li>
    <li>Operations Dept Salary: ₹${operationsSalary.toLocaleString()}</li>
    <li>Backend Dept Salary: ₹${backendSalary.toLocaleString()}</li>
    <li>Admin Salary: ₹${adminSalary.toLocaleString()}</li>
    <li>HR Salary: ₹${hrSalary.toLocaleString()}</li>
    <li>Management Salary: ₹${managementSalary.toLocaleString()}</li>
    <li>Sales Dept Salary: ₹${salesSalary.toLocaleString()}</li>
    <li><strong>Rent Expense:</strong> ₹${rent.toLocaleString()}</li>
  `;
}
