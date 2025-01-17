// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  // var st = d3.select("#State2").property("value");
  var st = d3.select("#State").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (st) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.State === st);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will

  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
