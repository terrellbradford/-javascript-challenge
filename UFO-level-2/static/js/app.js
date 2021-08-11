// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var filter = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");
var city_filter = d3.select("#city-filter-btn");
var city_clear = d3.select("#city-clear-btn");
var state_filter = d3.select("#state-filter-btn");
var state_clear = d3.select("#state-clear-btn");
var country_filter = d3.select("#country-filter-btn");
var country_clear = d3.select("#country-clear-btn");
var shape_filter = d3.select("#shape-filter-btn");
var shape_clear = d3.select("#shape-clear-btn");

// Use Arrow Functions to update each cell's text key and value
tableData.forEach((ufoSighting) => {
  console.log(ufoSighting);
  // append a table row for each value
  var row = tbody.append("tr");
  // adding objects
  Object.entries(ufoSighting).forEach(([key, value]) => {
    console.log(key, value);
    // append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});
// Create a filter for new data
filter.on("click", function() {

  tbody.html("");

  // input element
  var inputElement = d3.select("#datetime");

  // user input
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // Filter Data with datetime equal to user input
  var filteredData = tableData.filter(num_of_sightings => num_of_sightings.datetime === inputValue);
  console.log(filteredData);

  // Use Arrow Functions to update each cell's text key and value with filtered data
  filteredData.forEach(num_of_sightings => {
    console.log(num_of_sightings);
    // append a table row for each value
    var next_row = tbody.append("tr");
    // adding key value pair
    Object.entries(num_of_sightings).forEach(([key, value]) => {
      console.log(key, value);
      // append a cell to the row for each value
      var cell = next_row.append("td");
      cell.text(value);
    });
  });
});

clear.on("click", function() {
    tbody.html("");

    tableData.forEach((ufoSighting) => {
        console.log(ufoSighting);
        // append a table row for each value
        var row = tbody.append("tr");
        // adding objects
        Object.entries(ufoSighting).forEach(([key, value]) => {
          console.log(key, value);
          // append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
      });

});

// Create a filter for new data
city_filter.on("click", function() {

  tbody.html("");

  // input element
  var inputElement = d3.select("#city");

  // user input
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // Filter Data with datetime equal to user input
  var filteredData = tableData.filter(num_of_sightings => num_of_sightings.city === inputValue);
  console.log(filteredData);

  // Use Arrow Functions to update each cell's text key and value with filtered data
  filteredData.forEach(num_of_sightings => {
    console.log(num_of_sightings);
    // append a table row for each value
    var next_row = tbody.append("tr");
    // adding key value pair
    Object.entries(num_of_sightings).forEach(([key, value]) => {
      console.log(key, value);
      // append a cell to the row for each value
      var cell = next_row.append("td");
      cell.text(value);
    });
  });
});

city_clear.on("click", function() {
    tbody.html("");

    tableData.forEach((ufoSighting) => {
        console.log(ufoSighting);
        // append a table row for each value
        var row = tbody.append("tr");
        // adding objects
        Object.entries(ufoSighting).forEach(([key, value]) => {
          console.log(key, value);
          // append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
      });

});
