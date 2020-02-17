// from data.js
var tableData = data;

// function to display UFO sightings
// using Object.entries to get key, value data inside the table
// loop through the objects to add to the table in html
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };

  // clear the table for new data
function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // initial display of all UFO sightings
  console.log(tableData);
  tableDisplay(tableData);

// 'Filter Table' button
var button = d3.select("#filter-btn");

// filter the database and display
button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");
  
  // display the whole table if the date field has no date
  if (dateInput.trim() === "" ) {
    
    var filteredData = tableData;
  } else {
    // otherwise, display the filtered dataset  
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.datetime === dateInput.trim());
  };

  // display message if no records found date format was improperly entered
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found, or date format was improperly entered</h4>");
  };

  console.log(filteredData);
  tableDisplay(filteredData);
});