import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartPie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="pie"
        width={380}
      />
    );
  }
}

export default ChartPie;
