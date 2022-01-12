let ctx = document.getElementById('yearMainChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: '# of Votes',
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
        
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: '# of Votes',
            data: [10, 12, 19, 17, 18, 19.5, 19],
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
            label: '# of Votes',
            data: [30, 24, 22, 20, 18, 16, 11],
            backgroundColor: [
                'rgba(252, 25, 252, 1)', 'rgba(255, 25, 54, 1)', 
                'rgba(44, 25, 203, 1)', 'rgba(44, 254, 38, 1)',
                'rgba(213, 123, 37, 1)', 'rgba(194, 82, 144, 1)',
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
            label: '# of Votes',
            data: [30, 24, 22, 20, 18, 16, 11],
            backgroundColor: [
                'rgba(252, 25, 252, 1)', 'rgba(255, 25, 54, 1)', 
                'rgba(44, 25, 203, 1)', 'rgba(44, 254, 38, 1)',
                'rgba(213, 123, 37, 1)', 'rgba(194, 82, 144, 1)',
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
            label: '# of Votes',
            data: [30, 24, 22, 20, 18, 16, 11],
            backgroundColor: [
                'rgba(252, 25, 252, 1)', 'rgba(255, 25, 54, 1)', 
                'rgba(44, 25, 203, 1)', 'rgba(44, 254, 38, 1)',
                'rgba(213, 123, 37, 1)', 'rgba(194, 82, 144, 1)',
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
            label: '# of Votes',
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
                'rgba(252, 25, 252, 1)', 'rgba(255, 25, 54, 1)', 
                'rgba(44, 25, 203, 1)', 'rgba(44, 254, 38, 1)',
                'rgba(213, 123, 37, 1)', 'rgba(194, 82, 144, 1)',
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
                display: true
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
