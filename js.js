
var url = `https://api.covid19api.com/world/total`




fetch(url)
  .then(response => response.json())
  .then(data => {
    
  
    var card = `<div class="card bg-warning">
     <h1>Total Confirmed</h1>
     <h2>${data.TotalConfirmed} </h2>
     </div>
     <div class="card bg-warning">
     <h1>Total Death</h1>
     <h2>${data.TotalDeaths} </h2>
     </div>
     <div class="card bg-warning">
     <h1>Total Recovery</h1>
     <h2>${data.TotalRecovered} </h2>
     </div>`

     document.querySelector("#cards").innerHTML = card;

     Highcharts.chart('chart3', {
      chart: {
        type: 'column'
      },
      title: {
        align: 'left',
        text: ''
      },
      subtitle: {
        align: 'left',
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
    
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}'
          }
        }
      },
    
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}'
      },
    
      series: [
        {
          name: 'Information',
          colorByPoint: true,
          data: [
            {
              name: 'Total Confirmed',
              y: data.TotalConfirmed,
              drilldown: 'Chrome'
            },
            {
              name: 'Total Deaths',
              y:data.TotalDeaths,
              drilldown: 'Safari'
            },
            {
              name: 'Total Recovered',
              y: data.TotalRecovered,
              drilldown: 'Firefox'
            }
          ]
        }
      ]
    });
  }).catch(error => console.error(error))
// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart



function fun(){
  var country=document.querySelector("#country").value;

  fetch(`https://api.covid19api.com/country/${country}`)
    .then(response => response.json())
    .then(data => {
      var len = data.length;
      var cardsCountry = `<div class="card bg-warning">
      <h1>Total Confirmed</h1>
      <h2>${data[len-1].Confirmed} </h2>
      </div>
      <div class="card bg-warning">
      <h1>Total Death</h1>
      <h2>${data[len-1].Deaths} </h2>jkb
      </div>
      <div class="card bg-warning">
      <h1>Total Recovery</h1>
      <h2>${data[len-1].Recovered} </h2>
      </div>`

      document.querySelector("#cardsCountry").innerHTML = cardsCountry;



      // Data retrieved from https://netmarketshare.com/
Highcharts.chart('CountryChart', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: `${country}'s<br> Status`,
    align: 'center',
    verticalAlign: 'middle',
    y: 60
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%'
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['Confirmed', data[len-1].Confirmed],
      ['Deaths', data[len-1].Deaths],
      ['Recovered', data[len-1].Recovered],
      {
        name: 'Other',
        y: 3.77,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
});

Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: [
      'Total Confirmed',
      'Total Deaths',
      'Total Recovered'
    ]
  },
  yAxis: [{
    min: 0,
    title: {
      text: ''
    }
  }, {
    title: {
      text: 'millions'
    },
    opposite: true
  }],
  legend: {
    shadow: false
  },
  tooltip: {
    shared: true
  },
  plotOptions: {
    column: {
      grouping: false,
      shadow: false,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Employees',
    color: 'rgba(165,170,217,1)',
    data: [data[len-1].Confirmed, data[len-1].Deaths, data[len-1].Recovered],
    pointPadding: 0.3,
    pointPlacement: -0.2
  }]
});
})
}






fetch(`https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z}`)
.then(response => response.json())
.then(data => {
  var len = data.length;
  var cardsCountry2 = `<div class="card bg-warning">
  <h1>Total Confirmed</h1>
  <h2>${data[len-1].Confirmed} </h2>
  </div>
  <div class="card bg-warning">
  <h1>Total Death</h1>
  <h2>${data[len-1].Deaths} </h2>
  </div>
  <div class="card bg-warning">
  <h1>Total Recovery</h1>
  <h2>${data[len-1].Recovered} </h2>
  </div>
  <div class="card bg-warning">
  <h1>Total Active</h1>
  <h2>${data[len-1].Active} </h2>
  </div>`

  document.querySelector("#cr3").innerHTML = cardsCountry;


  Highcharts.chart('SA', {

    title: {
      text: 'Logarithmic axis demo'
    },
  
    xAxis: {
      tickInterval: 1,
      type: 'logarithmic',
      accessibility: {
        rangeDescription: 'Range: 1 to 10'
      }
    },
  
    yAxis: {
      type: 'logarithmic',
      minorTickInterval: 0.1,
      accessibility: {
        rangeDescription: 'Range: 0.1 to 1000'
      }
    },
  
    tooltip: {
      headerFormat: '<b>{series.name}</b><br />',
      pointFormat: 'x = {point.x}, y = {point.y}'
    },
  
    series: [{
      data: [data[len-1].Confirmed, data[len-1].Deaths, data[len-1].Recovered, data[len-1].Active],
      pointStart: 1
    }]
  });

  
});





fetch(`https://api.covid19api.com/summary`)
.then(response => response.json())
.then(data => {
  var len = 197;
  var r1 = Math.floor(Math.random() * len)
  var r2 =Math.floor(Math.random() * len)
  var r3 = Math.floor(Math.random() * len)
  var r4 = Math.floor(Math.random() * len)

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

  
// Data.Countries retrieved from https://www.ssb.no/statbank/table/10467/
var chart = Highcharts.chart('chart4', {

  chart: {
    type: 'column'
  },

  title: {
    text: 'Born persons, by girls\' name'
  },

  subtitle: {
    text: 'Resize the frame or click buttons to change appearance'
  },

  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical'
  },

  xAxis: {
    categories: [data.Countries[Number(r1)].Country , data.Countries[Number(r2)].Country , data.Countries[Number(r3)].Country , data.Countries[Number(r4)].Country],
    labels: {
      x: -10
    }
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: 'Amount'
    }
  },

  series: [{
    name: '',
    data: [data.Countries[Number(r1)].TotalConfirmed , data.Countries[Number(r2)].TotalConfirmed , data.Countries[Number(r3)].TotalConfirmed , data.Countries[Number(r4)].TotalConfirmed]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'horizontal'
        },
        yAxis: {
          labels: {
            align: 'left',
            x: 0,
            y: -5
          },
          title: {
            text: null
          }
        },
        subtitle: {
          text: null
        },
        credits: {
          enabled: false
        }
      }
    }]
  }
});

document.getElementById('small').addEventListener('click', function () {
  chart.setSize(400);
});

document.getElementById('large').addEventListener('click', function () {
  chart.setSize(600);
});

document.getElementById('auto').addEventListener('click', function () {
  chart.setSize(null);

});

});




    $(document).ready(function() {
      $('#covidTable').DataTable({
        "ajax": {
          "url": "https://api.covid19api.com/summary",
          "dataSrc": "Countries"
        },
        "columns": [
          {"data": "Country"},
          {"data": "TotalConfirmed"},
          {"data": "TotalDeaths"},
          {"data": "TotalRecovered"},
          {"data": "Active"}
        ]
      });
    });
 


