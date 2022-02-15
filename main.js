let ctx = document.getElementById('yearMainChart').getContext('2d');
let yearMainChart = new Chart(ctx, {
    type: 'bar',
    data: {
        
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'значение',
            data: analysisData['yearMainChart'],
            backgroundColor: [
                'rgba(255, 135, 171, 1)'
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
                beginAtZero: false,
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
    type: 'line',
    data: {
        
        labels: [
            'янв', 'фев', 'мар', 'апр', 'май', 'июн', 
            'июл','авг', 'сен', 'окт', 'ноя', 'дек'
        ],
        datasets: [{
            label: 'значение',
            data: analysisData['monthMainChart'][2021],
            backgroundColor: [
                'rgba(255, 135, 171, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
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
                beginAtZero: false,
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
        
        labels: ['Управление', 'Преподавание', 'Творчество'],
        datasets: [{
            label: 'значение',
            data: analysisData['averageRateByDepartment'][2021],
            backgroundColor: [
                'rgba(46, 196, 182, 1)', 
                'rgba(231, 29, 54, 1)', 
                'rgba(255, 159, 28, 1)'
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
        
        labels: ['Управление', 'Преподавание', 'Творчество'],
        datasets: [{
            label: 'значение',
            data: analysisData['departmentAverageDoughnut'][2021],
            backgroundColor: [
                'rgba(46, 196, 182, 1)', 
                'rgba(231, 29, 54, 1)', 
                'rgba(255, 159, 28, 1)'
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
        
        labels: ['Управление', 'Преподавание', 'Творчество'],
        datasets: [{
            label: 'значение',
            data: analysisData['departmentAverageDoughnutPerPerson'][2021],
            backgroundColor: [
                'rgba(46, 196, 182, 1)', 
                'rgba(231, 29, 54, 1)', 
                'rgba(255, 159, 28, 1)'
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
        
        labels: ['Управление', 'Преподавание', 'Творчество'],
        datasets: [{
            label: 'значение',
            data: analysisData['ageScatter'][2021],
            backgroundColor: [
                'rgba(255, 135, 171, 1)'
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
                beginAtZero: false,
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

averageValue.innerHTML = analysisData['averageValue'][2021]
medianValue.innerHTML = analysisData['medianValue'][2021]

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