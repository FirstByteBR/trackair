// chart_generator.js
// Requires Chart.js library: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

function generateCarbonChart(data, canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels, // e.g., ['2020', '2021', '2022', ...]
            datasets: [{
                label: 'CO2 Emissions (GtCO2)',
                data: data.values, // e.g., [40.5, 41.2, 42.1, ...]
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Global Carbon Emissions Trend (GCB 2025)'
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
    return chart;
}

// Example usage:
// const data = { labels: ['2010', '2015', '2020', '2025'], values: [35, 38, 42, 45] };
// generateCarbonChart(data, 'myChart');