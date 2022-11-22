const ctx_1 = document.getElementById('chartSales');

new Chart(ctx_1, {
  //type: 'bar',
  type: 'polarArea',
  data: {
    labels: ['Ago', 'Set', 'Out'],
    datasets: [{
      label: 'Valor Ponto - Trimestral',
      data: [0.42, 0.38, 0.36],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54,162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54,162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
    }
  }
});

const ctx_2 = document.getElementById('chartProduction');

new Chart(ctx_2, {
  type: 'bar',
  //type: 'polarArea',
  data: {
    labels: ['Ago', 'Set', 'Out'],
    datasets: [{
      label: 'Faturamento - Trimestral',
      data: [1200, 1900, 3000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54,162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54,162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
    }
  }
});