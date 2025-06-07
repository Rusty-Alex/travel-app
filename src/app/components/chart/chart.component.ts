import { ChangeDetectorRef, Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend,
  ApexDataLabels,
  ApexFill
} from 'ng-apexcharts';
import { MainVariableService } from '../../shared/services/mainVariabeln/main-variable.service';
import { combineLatest } from 'rxjs';
import { FirestoreService } from '../../shared/services/firestore/firestore.service';

@Component({
  selector: 'app-chart',
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})

export class ChartComponent {  
  
  public chartSeries: ApexNonAxisChartSeries = [];
  public chartLabels: string[] = ['Assistenten', 'Selbstständige Erstellt'];

  constructor(public mainVariable: MainVariableService, public firestoreService: FirestoreService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {    
    combineLatest([
      this.firestoreService.assistentSubject$,
      this.firestoreService.selfSubject$
    ]).subscribe(([assistent, selbst]) => {      
      const assistentCount = assistent?.[0]?.count ?? 0;
      const selbstCount = selbst?.[0]?.count ?? 0;
      this.mainVariable.assistent = assistent;
      this.mainVariable.selbst = selbst;
      this.chartSeries = [assistentCount, selbstCount];      
    });
  }


  public chartDetails: ApexChart = {
    type: 'donut',
    width: 350,

  };



  public dataLabels: ApexDataLabels = {
    enabled: false,
  };

  public chartfill: ApexFill = {
    colors: ['var(--primary-color)', 'var(--white-color)'],
  }

  public tooltip: ApexTooltip = {
    enabled: true,
    theme: 'dark',
    style: {
      fontSize: '14px',
      fontFamily: 'Arial',
    },
    fillSeriesColor: false,
    onDatasetHover: {
      highlightDataSeries: true
    },
  }

  public chartLegend: ApexLegend = {
    position: 'right',
    fontSize: '18px',
    offsetX: -50,
    labels: {
      useSeriesColors: true
    },
    markers: {
      offsetX: -10,
      fillColors: ['var(--primary-color)', 'var(--white-color)']
    }
  };

  public responsive: ApexResponsive[] = [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'right'
        }
      }
    }
  ];


}
