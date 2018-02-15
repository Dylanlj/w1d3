var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var finalTax = {};

  for(var i = 0; i < salesData.length; i++){
    var currentCompany = salesData[i]['name'];
    if(!finalTax[currentCompany]){
      populateObject(currentCompany);
    };
    finalTax[currentCompany].totalSales += totalSum(currentCompany, i);
    finalTax[currentCompany].totalTaxes += addTax(currentCompany, i);
  };

  function populateObject(company){
      var company = salesData[i]['name'];
      finalTax[company] = {};
      finalTax[company]['totalSales'] = 0;
      finalTax[company]['totalTaxes'] = 0;
  };

  function totalSum(company, indexOfCompany){
    var sum = 0;
    var arrayOfSales = salesData[indexOfCompany].sales;
      for(var p = 0; p < arrayOfSales.length; p++){
        sum += salesData[indexOfCompany]['sales'][p];
      }
    return sum
  };

  function addTax(company, indexOfCompany){
    var saleToTax = totalSum(company, indexOfCompany);
    var taxToApply = taxRates[salesData[indexOfCompany]['province']];
    return (saleToTax * taxToApply);
  };
return finalTax;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
