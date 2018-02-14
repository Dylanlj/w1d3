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
  var finalTax = {
  }
  populateObject();
  totalSum();
  // addTax();

  function populateObject(){
    for(var i = 0; i < salesData.length; i++){
      var currentCompany = salesData[i]['name'];
      finalTax[currentCompany] = {};
      finalTax[currentCompany]['totalSales'] = 0;
      finalTax[currentCompany]['totalTaxes'] = 0;

    };
  };

  function totalSum(){
    for(var p = 0 ; p < salesData.length; p++){
      var currentCompany = salesData[p]['name'];
      var arrayOfSales = salesData[p]['sales'];
      for(var x = 0; x < arrayOfSales.length; x++){
        var currentSale = salesData[p]['sales'][x];
        finalTax[currentCompany]['totalSales'] += currentSale;
      };
    } ;
  };

  // function addTax(){
  //   for(var j = 0; j < salesData.length; j++){
  //     var currentCompany = salesData[p]['name'];
      
  //   }
  // }



  





  console.log(finalTax);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
//console.log(results)
