google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'People Who Like It');
  data.addRows([
    ['Tomato', 6],
    ['Pineapple', 6],
    ['Pepperoni', 7],
    ['Peppers', 4],
    ['Shrimp', 1]
  ]);

  // Set chart options
  var options = {'title':'HTML300 Class Poll Results: Favorite Pizza Toppings',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
