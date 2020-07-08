// from data.js
var tableData = data;

// Assign the data from `data.js` to a descriptive variable
var inputElement = d3.select("#datetime");
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody")

function sort() {
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);
  tbody.html("");
  filteredData.forEach(ufosight => {
      var row = tbody.append("tr");
      Object.entries(ufosight).forEach(([key,value]) => row.append("td").text(value));
  })
  
}

button.on("click", sort );
