import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	ReactiveFormsModule,
	FormsModule,
	FormGroup,
	FormControl,
	Validators,
	FormBuilder
 } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BreadcrumbModule } from './../../_shared';
import { Filter } from './../../_common';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DashboardRoutingModule,
		BreadcrumbModule
	],
	declarations: [
		DashboardComponent,
		Filter
	],
})
export class DashboardModule { }
