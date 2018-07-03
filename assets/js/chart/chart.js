google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(AreaChart);
google.charts.setOnLoadCallback(CurvingChart);
google.charts.setOnLoadCallback(PieChart);
google.charts.setOnLoadCallback(TitikChart);
google.charts.setOnLoadCallback(OverView);

function AreaChart() {
  var data = google.visualization.arrayToDataTable([
    ['Bulan', 'Pengunjung'],
    ['Jan',  47],
    ['Feb',  77],
    ['Mar',  27],
    ['Apr',  79],
    ['Mei',  36],
    ['Jun',  43],
    ['Jul',  25],
    ['Ags',  37],
    ['Sep',  59],
    ['Okt',  25],
    ['Nov',  72]
  ]);

  var options = {
    title: 'Pengunjung Berdasar Browser Bulan',
    hAxis: {
      title: 'Bulan',  
      titleTextStyle: {color: '#333'}
    },
    vAxis: {
      minValue: 0,
      title: 'Pengunjung',
      legend: { position: 'bottom' }
    }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('area-chart'));
  chart.draw(data, options);
}

function CurvingChart() {
  var data = google.visualization.arrayToDataTable([
    ['Bulan', 'Pengunjung'],
    ['Jan',  47],
    ['Feb',  77],
    ['Mar',  27],
    ['Apr',  79],
    ['Mei',  36],
    ['Jun',  43],
    ['Jul',  25],
    ['Ags',  37],
    ['Sep',  59],
    ['Okt',  25],
    ['Nov',  72]
  ]);

  var options = {
    title: 'Update Konten per Bulan',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve-chart'));
  chart.draw(data, options);
}

function PieChart() {
  var data = google.visualization.arrayToDataTable([
    ['Browser', 'Total'],
    ['Mozilla', 213],
    ['Chrome',  248],
    ['Edge/IE', 26],
    ['Opera', 33],
    ['Vivaldi', 5]
  ]);

  var options = {
    title: 'Pengunjung Berdasar Browser yang digunakan'
  };

  var chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
  chart.draw(data, options);
}

function TitikChart() {
  var data = google.visualization.arrayToDataTable([
    ['Negara', 'Banyak'],
    [ 'IDN', 16],
    [ 'MYS', 52],
    [ 'SGP', 113],
    [ 'CAN', 93],
    [ 'USA', 121],
    [ 'UK',  110]
  ]);

  var options = {
    title: 'Pengunjung Berdasar Negara',
    hAxis: {title: 'Negara', minValue: 0, maxValue: 15},
    vAxis: {title: 'Jumlah'},
    legend: 'none'
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('titik-chart'));
  chart.draw(data, options);
}

function OverView() {
  var data = google.visualization.arrayToDataTable([
    ['Bulan', 'Pengunjung'],
    ['Jan',  47],
    ['Feb',  77],
    ['Mar',  27],
    ['Apr',  79],
    ['Mei',  36],
    ['Jun',  43],
    ['Jul',  25],
    ['Ags',  37],
    ['Sep',  59],
    ['Okt',  25],
    ['Nov',  72]
  ]);

  var options = {
    title: 'Pengunjung Berdasar Bulan',
    vAxis: {title: 'Total'},
    isStacked: true
  };

  var chart = new google.visualization.SteppedAreaChart(document.getElementById('overview'));
  chart.draw(data, options);
}
