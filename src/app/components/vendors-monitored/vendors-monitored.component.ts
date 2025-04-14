import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke, ApexFill, ApexDataLabels, ApexResponsive } from 'ng-apexcharts';

@Component({
  selector: 'app-vendors-monitored',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './vendors-monitored.component.html',
  styleUrl: './vendors-monitored.component.scss'
})
export class VendorsMonitoredComponent {

  chartOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    plotOptions: ApexPlotOptions;
    stroke: ApexStroke;
    fill: ApexFill;
    dataLabels: ApexDataLabels;
    colors: string[];
  };

  constructor() {
    this.chartOptions = {
      series: [75],
      chart: {
        type: 'radialBar',
        height: 250,
        // offsetY: -20,
        offsetX: -45,
      },
      // labels: ['Progress'],
      labels: [''],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5,
          },
          dataLabels: {
            name: {
              show: true,
              offsetY: -10
            },
            value: {
              offsetY: 10,
              fontSize: '22px'
            }
          }
        }
      },
      fill: {
        type: 'solid'
      },
      colors: ['#5b42c6d9'],
      stroke: {
        lineCap: 'round',
        curve: 'smooth',
      },

      dataLabels: {
        enabled: true
      }
    };
  }

}
