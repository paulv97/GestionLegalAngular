import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  // choosePlan(undefined: undefined) {
  // throw new Error('Method not implemented.');
  // }
  selectedPlan: String = '';

  choosePlan(plan: String) {
    this.selectedPlan = plan;
    console.log(this.selectedPlan);
    this.router.navigate(['checkout/12345'])
  }
  // basicPlanItems: any;

  basicPlanItems = [
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
