function calculateTDS(annualSalary) {
  if (annualSalary <= 400000) return 0;
  if (annualSalary <= 800000) return (annualSalary - 400000) * 0.05;
  if (annualSalary <= 1200000) return (400000 * 0.05) + (annualSalary - 800000) * 0.10;
  if (annualSalary <= 1600000) return (400000 * 0.05) + (400000 * 0.10) + (annualSalary - 1200000) * 0.15;
  if (annualSalary <= 2000000) return (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (annualSalary - 1600000) * 0.20;
  if (annualSalary <= 2400000) return (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (annualSalary - 2000000) * 0.25;
  return (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (400000 * 0.25) + (annualSalary - 2400000) * 0.30;
}

function getDeptTDS(monthlySalary, employees) {
  const annualSalary = monthlySalary * 12;
  const tdsPerEmployee = calculateTDS(annualSalary);
  return tdsPerEmployee * employees;
}

function calculateExpenses() {
  const getNumber = (id) => parseFloat(document.getElementById(id).value) || 0;

  // Revenue in crores converted to rupees
  const revenueCrores = getNumber("revenue");
  const revenue = revenueCrores * 1e7;

  // Employees and salary inputs
  const accountsEmployees = getNumber("accounts-employees");
  const accountsSalary = getNumber("accounts-salary");

  const operationsEmployees = getNumber("operations-employees");
  const operationsSalary = getNumber("operations-salary");

  const backendEmployees = getNumber("backend-employees");
  const backendSalary = getNumber("backend-salary");

  const adminEmployees = getNumber("admin-employees");
  const adminSalary = getNumber("admin-salary");

  const hrEmployees = getNumber("hr-employees");
  const hrSalary = getNumber("hr-salary");

  const managementEmployees = getNumber("management-employees");
  const managementSalary = getNumber("management-salary");

  const salesEmployees = getNumber("sales-employees");
  const salesSalary = getNumber("sales-salary");

  const rent = getNumber("rent");

  // Total salaries
  const totalSalary =
    accountsEmployees * accountsSalary +
    operationsEmployees * operationsSalary +
    backendEmployees * backendSalary +
    adminEmployees * adminSalary +
    hrEmployees * hrSalary +
    managementEmployees * managementSalary +
    salesEmployees * salesSalary;

  // TDS per department
  const totalTDS =
    getDeptTDS(getNumber("accounts-salary"), getNumber("accounts-employees")) +
    getDeptTDS(getNumber("operations-salary"), getNumber("operations-employees")) +
    getDeptTDS(getNumber("backend-salary"), getNumber("backend-employees")) +
    getDeptTDS(getNumber("admin-salary"), getNumber("admin-employees")) +
    getDeptTDS(getNumber("hr-salary"), getNumber("hr-employees")) +
    getDeptTDS(getNumber("management-salary"), getNumber("management-employees")) +
    getDeptTDS(getNumber("sales-salary"), getNumber("sales-employees"));

  // Total expenses = salaries + TDS + rent
  const totalExpenses = totalSalary + totalTDS + rent;

  // Profit and margin
  const profit = revenue - totalExpenses;
  const profitMargin = revenue > 0 ? ((profit / revenue) * 100).toFixed(2) : 0;

  //TDS calculator



    // Display TDS
    document.getElementById("tds-amount").textContent = totalTDS.toLocaleString();

  // Display
  document.getElementById("display-revenue").textContent = revenue.toLocaleString();
  document.getElementById("total-expenses").textContent = totalExpenses.toLocaleString();
  document.getElementById("profit").textContent = profit.toLocaleString();
  document.getElementById("profit-margin").textContent = profitMargin;
  document.getElementById("tds-amount").textContent = totalTDS.toLocaleString();
  document.getElementById("total-salary").textContent = totalSalary.toLocaleString();
  document.getElementById("tds-amount").textContent = totalTDS.toLocaleString();


  // Salary and rent breakdown
  const breakdownList = document.getElementById("breakdown-list");
  breakdownList.innerHTML = `
    <li>Accounts Dept Salary: ₹${(accountsEmployees * accountsSalary).toLocaleString()}</li>
    <li>Operations Dept Salary: ₹${(operationsEmployees * operationsSalary).toLocaleString()}</li>
    <li>Backend Dept Salary: ₹${(backendEmployees * backendSalary).toLocaleString()}</li>
    <li>Admin Salary: ₹${(adminEmployees * adminSalary).toLocaleString()}</li>
    <li>HR Salary: ₹${(hrEmployees * hrSalary).toLocaleString()}</li>
    <li>Management Salary: ₹${(managementEmployees * managementSalary).toLocaleString()}</li>
    <li>Sales Dept Salary: ₹${(salesEmployees * salesSalary).toLocaleString()}</li>
    <li><strong>Rent Expense:</strong> ₹${rent.toLocaleString()}</li>
    <li><strong>Total TDS:</strong> ₹${totalTDS.toLocaleString()}</li>
  `;
}
