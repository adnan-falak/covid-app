
const chartOption = {
    responsive: true,
    scales: {
        xAxes: [
            {
                ticks:{
                    beginAtZero: true,
                    fontSize: '1rem',
                    fontColor: 'rgb(212, 207, 197)'
                },
                gridLines:{
                    display: false,
                    color:"marroon"
                }
            }
        ],
        yAxes: [{
            ticks: {
                fontSize: '1rem',
                fontColor: "maroon"
            },
            gridLines:{
                color:"teal"
            }
        }]
    },
    legend: {
        labels: {
            fontColor: "teal",
            fontSize: '1rem'
        }
    }
}

export { chartOption }