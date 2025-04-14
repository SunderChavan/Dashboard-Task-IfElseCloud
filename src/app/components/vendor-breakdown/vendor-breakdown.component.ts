import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexYAxis, ApexLegend, ApexPlotOptions, ApexFill, ApexTooltip } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-vendor-breakdown',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './vendor-breakdown.component.html',
  styleUrl: './vendor-breakdown.component.scss'
})
export class VendorBreakdownComponent {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Low",
          data: [20, 30, 15, 25, 20, 30, 35, 35, 40, 45, 50, 30]
        },
        {
          name: "Medium",
          data: [30, 30, 15, 25, 20, 30, 25, 25, 20, 25, 30, 20]
        },
        {
          name: "High",
          data: [10, 30, 15, 25, 20, 30, 20, 20, 20, 20, 20, 30]
        }
      ],
      chart: {
        type: "bar",
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        }
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius: 4,
          borderRadiusApplication: "end"
        }
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "Security rating"
        },
        max: 100
      },
      legend: {
        // position: "top",
        // horizontalAlign: "right"
        show: false
      },
      fill: {
        opacity: 1
      },
      colors: ["#6B47DC", "#9B75F3", "#E1E1E1"],
      dataLabels: {
        enabled: false
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    };
  }

}
