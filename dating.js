var chart = {
    type: 'bar',
    data: {
        datasets: [
            {
                label: 'Nha Trang',
                data: [1],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Da Nang',
                data: [1],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Hồ Chí Minh',
                data: [3],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    fontSize: 20,
                    labelString: 'phone numbers acquired',
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    max: 5,
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    fontSize: 20,
                    labelString: 'geographic region',
                },
            }]
        },
        annotation: {
            annotations: [
                {
                    type: "line",
                    mode: "horizontal",
                    scaleID: "y-axis-0",
                    value: "3",
                    borderColor: "red",
                    label: {
                        content: "redundancy target",
                        enabled: true,
                    }
                },
            ]
        },
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, chart);
}, false);
