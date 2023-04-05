# Covid-dashbord-2

html
<table id="covidTable" >
    <thead>
      <tr>
        <th>Country</th>
        <th>Total Cases</th>
        <th>Total Deaths</th>
        <th>Total Recovered</th>
        <th>Active Cases</th>
      </tr>

There are 5 charts and 5 API.

jsx
1,`https://api.covid19api.com/world/total`
2,(`https://api.covid19api.com/country/${country}`)
3,(`https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z}`)
4,(`https://api.covid19api.com/summary`)
5,"https://api.covid19api.com/summary",

This is an HTML document with embedded JavaScript code. 

It uses the Bootstrap and Highcharts libraries to create a web page that displays COVID-19 statistics for different countries.

jsx
console.log(parseInt(r1))
  var cardsCountry = `<div class="card bg-warning">
  <h4>${data.Countries[Number(r1)].Country}</h4>
  <h4>Total Confirmed</h4>
  <h5>${data.Countries[Number(r1)].TotalConfirmed} </h5>
  </div>
  <div class="card bg-warning">
  <h4>${data.Countries[Number(r2)].Country}</h4>
  <h4>Total Confirmed</h4>
  <h5>${data.Countries[Number(r2)].TotalConfirmed} </h5>
  </div>
  <div class="card bg-warning">
  <h4>${data.Countries[Number(r3)].Country}</h4>
  <h4>Total Confirmed</h4>
  <h5>${data.Countries[Number(r3)].TotalConfirmed} </h5>
  </div>
  <div class="card bg-warning">
  <h4>${data.Countries[Number(r4)].Country}</h4>
  <h4>Total Confirmed</h4>
  <h5>${data.Countries[Number(r4)].TotalConfirmed} </h5>
  </div>`

  document.querySelector("#cr4").innerHTML = cardsCountry;

The <head> section of the document imports various html and JavaScript files, including the Bootstrap and Highcharts libraries, as well as jQuery and DataTables.

 These libraries provide the tools necessary to create the page's layout and visualizations.

The <body> section contains various HTML elements that display the content of the page.

 These include a navigation bar, several containers with cards and charts, and a table displaying COVID-19 data for different countries.

The embedded JavaScript code fetches data from the COVID-19 API and uses it to update the content of the page. Specifically, it fetches global COVID-19 data from the API, generates cards displaying the total confirmed cases, deaths, and recoveries worldwide, and updates the relevant HTML elements with this information.

Overall, this code uses HTML, js, and JavaScript to create a dynamic web page that displays COVID-19 statistics for different countries, using various libraries to provide functionality and visualizations.

The JavaScript code is responsible for fetching data from the COVID-19 API using the fetch() method and then manipulating the HTML DOM to display the data.

The JavaScript code also includes the Highcharts library, which is used to generate graphs and charts based on the fetched data. It includes various modules such as exporting, export-data, and accessibility, which enhance the chart's functionality.

Furthermore, the code uses the jQuery library to manipulate the HTML DOM and DataTables to generate the COVID-19 statistics table. It also uses Bootstrap CSS framework to style the web page and make it responsive.

jsx
<table id="covidTable" >
    <thead>
      <tr>
        <th>Country</th>
        <th>Total Cases</th>
        <th>Total Deaths</th>
        <th>Total Recovered</th>
        <th>Active Cases</th>
      </tr>

Finally, the code also defines various event listeners, such as the onclick event for the search button, and the click event for the "Small", "Large", and "Auto" buttons, which allow users to manipulate the size of the chart.

jsx
<button id="small">Small</button>
    <button id="large">Large</button>
    <button id="auto">Auto</button>
