import { Component, inject, OnInit } from '@angular/core';
import { TeamMembersComponent } from '../team-members/team-members.component';
import { VendorBreakdownComponent } from '../vendor-breakdown/vendor-breakdown.component';
import { VendorsMonitoredComponent } from '../vendors-monitored/vendors-monitored.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TeamMembersComponent, VendorBreakdownComponent, VendorsMonitoredComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(  ){
  }

  ngOnInit(): void{
  }

}
