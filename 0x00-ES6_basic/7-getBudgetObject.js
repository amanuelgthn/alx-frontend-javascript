export default function getBudgetObject(income, gdp, capita) {
  const budget = Object();
  budget.income = income;
  budget.gdp = gdp;
  budget.capital = capita;
  return budget;
}
