let ctx = document.getElementById('yearMainChart').getContext('2d');
let yearMainChart = new Chart(ctx, {
    type: 'bar',
    data: {
        
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'значение',
            data: [10, 12, 19, 17, 18, 19.5, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0,
        }]
    },
    options: {
        animations: {
            tension: {
              duration: 3000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "black"
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: "black"
                }
            }
        }
    }
});

let ctx2 = document.getElementById('monthMainChart').getContext('2d');
let monthMainChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        
        labels: [
            'янв', 'фев', 'мар', 'апр', 'май', 'июн', 
            'июл','авг', 'сен', 'окт', 'ноя', 'дек'
        ],
        datasets: [{
            label: 'значение',
            data: [10, 12, 19, 17, 18, 19.5, 19, 19, 19, 19, 19, 19],
            backgroundColor: [
                'rgba(101, 25, 252, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "black"
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: "black"
                }
            }
        }
    }
});

let ctx3 = document.getElementById('averageRateByDepartment').getContext('2d');
let averageRateByDepartment = new Chart(ctx3, {
    type: 'bar',
    data: {
        
        labels: ['Отдел 1', 'Отдел 2', 'Отдел 3', 'Отдел 4', 'Отдел 5', 'Отдел 6', 'Отдел 7'],
        datasets: [{
            label: 'значение',
            data: [30, 24, 22, 20, 18, 16, 11],
            backgroundColor: [
                'rgba(252, 25, 252, 1)', 'rgba(255, 25, 54, 1)', 
                'rgba(44, 25, 203, 1)', 'rgba(44, 254, 38, 1)',
                'rgba(213, 123, 37, 1)', 'rgba(246, 250, 45, 1)',
                'rgba(102, 255, 183, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "black"
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: "black"
                }
            }
        }
    }
});

let ctx4 = document.getElementById('departmentAverageDoughnut').getContext('2d');
let departmentAverageDoughnut = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        
        labels: ['Отдел 1', 'Отдел 2', 'Отдел 3', 'Отдел 4', 'Отдел 5', 'Отдел 6', 'Отдел 7'],
        datasets: [{
            label: 'значение',
            data: [30, 24, 22, 20, 18, 16, 11],
            backgroundColor: [
                'rgba(252, 25, 252, 1)', 'rgba(255, 25, 54, 1)', 
                'rgba(44, 25, 203, 1)', 'rgba(44, 254, 38, 1)',
                'rgba(213, 123, 37, 1)', 'rgba(246, 250, 45, 1)',
                'rgba(102, 255, 183, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        
        scales: {
            x: {
                display: false,
                grid: {
                  display: false,
                  drawBorder: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                },
                ticks: {
                    color: "black"
                }
            },
            y: {
                display: false,
                grid: {
                    display: false,
                    drawBorder: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                ticks: {
                    color: "black"
                }
            }
        }
    }
});


let ctx5 = document.getElementById('departmentAverageDoughnutPerPerson').getContext('2d');
let departmentAverageDoughnutPerPerson = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        
        labels: ['Отдел 1', 'Отдел 2', 'Отдел 3', 'Отдел 4', 'Отдел 5', 'Отдел 6', 'Отдел 7'],
        datasets: [{
            label: 'значение',
            data: [30, 24, 22, 20, 18, 16, 11],
            backgroundColor: [
                'rgba(252, 25, 252, 1)', 'rgba(255, 25, 54, 1)', 
                'rgba(44, 25, 203, 1)', 'rgba(44, 254, 38, 1)',
                'rgba(213, 123, 37, 1)', 'rgba(246, 250, 45, 1)',
                'rgba(102, 255, 183, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        
        scales: {
            x: {
                display: false,
                grid: {
                  display: false,
                  drawBorder: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                },
                ticks: {
                    color: "black"
                }
            },
            y: {
                display: false,
                grid: {
                    display: false,
                    drawBorder: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                ticks: {
                    color: "black"
                }
            }
        }
    }
});

let ctx6 = document.getElementById('ageScatter').getContext('2d');
let ageScatter = new Chart(ctx6, {
    type: 'scatter',
    data: {
        
        labels: ['Отдел 1', 'Отдел 2', 'Отдел 3', 'Отдел 4', 'Отдел 5', 'Отдел 6', 'Отдел 7'],
        datasets: [{
            label: 'значение',
            data: [{
                x: 5,
                y: 4
            }, {
                x: 2,
                y: 14
            },
            {
                x: 4,
                y: 12
            },
            {
                x: 2,
                y: 10
            },
            {
                x: 3,
                y: 4
            },
            {
                x: 3,
                y: 5
            },
            {
                x: 3,
                y: 8
            },
            {
                x: 6,
                y: 12
            }],
            backgroundColor: [
                'rgba(252, 25, 252, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "black"
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: "black"
                }
            }
        }
    }
});

let yearSelect = document.getElementById('year-select')
let averageValue = document.getElementById('average-value')
let medianValue = document.getElementById('median-value')

yearSelect.onchange = function() {

    let year = yearSelect.value

    averageValue.innerHTML = analysisData['averageValue'][year]
    medianValue.innerHTML = analysisData['medianValue'][year]

    monthMainChart.data.datasets[0].data = 
        analysisData['monthMainChart'][year]
    monthMainChart.update()

    averageRateByDepartment.data.datasets[0].data = 
        analysisData['averageRateByDepartment'][year]
    averageRateByDepartment.update()

    departmentAverageDoughnut.data.datasets[0].data = 
        analysisData['departmentAverageDoughnut'][year]
    departmentAverageDoughnut.update()

    departmentAverageDoughnutPerPerson.data.datasets[0].data = 
        analysisData['departmentAverageDoughnutPerPerson'][year]
    departmentAverageDoughnutPerPerson.update()

    ageScatter.data.datasets[0].data = 
        analysisData['ageScatter'][year]
    ageScatter.update()
}