import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartScatter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "SAMPLE A",
          data: [
            [16.4, 5.4],
            [21.7, 2],
            [25.4, 3],
            [19, 2],
            [10.9, 8.2],
            [16.4, 0],
            [16.4, 1.8],
            [13.6, 0.3],
            [13.6, 0],
            [29.9, 0],
            [27.1, 2.3],
            [16.4, 0],
            [13.6, 3.7],
          
          ],
        },
        {
          name: "SAMPLE B",
          data: [
            [36.4, 13.4],
            [1.7, 11],
            [5.4, 8],
            [9, 17],
            [1.9, 4],
            [3.6, 12.2],
            [1.9, 14.4],
            [1.9, 9],
            [1.9, 13.2],
            [1.4, 7],
            [6.4, 8.8],
            [3.6, 4.3],
            [1.6, 10],
            [9.9, 2],
            [7.1, 15],
            [1.4, 0],
            [3.6, 13.7],
            [1.9, 15.2],
            [6.4, 16.5],
            [0.9, 10],
          
          ],
        },
        {
          name: "SAMPLE C",
          data: [
            [21.7, 3],
            [23.6, 3.5],
            [24.6, 3],
            [29.9, 3],
            [21.7, 20],
            [23, 2],
            [10.9, 3],
            [28, 4],
            [27.1, 0.3],
            [16.4, 4],
            [13.6, 0],
            [19, 5],
            [22.4, 3],
            [24.5, 3],
            [32.6, 3],
            [27.1, 4],
            [29.6, 6],
            [31.6, 8],
            [21.6, 5],
    
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "scatter",
          zoom: {
            enabled: true,
            type: "xy",
          },
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1);
            },
          },
        },
        yaxis: {
          tickAmount: 7,
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="scatter"
        height={350}
      />
    );
  }
}

export default ChartScatter;
