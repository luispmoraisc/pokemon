import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

import { RequestsService } from './../_common/index';

import { BreadcrumbModule, HeaderComponent, SidebarComponent, CollapseService } from './../_shared/index';

import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';

@NgModule({
	imports: [
		CommonModule,
		ContentRoutingModule,
		HttpClientModule,
		FormsModule,
		BreadcrumbModule
	],
	declarations: [
		ContentComponent,
		HeaderComponent,
		SidebarComponent,
		DetailComponent	
	],	
	providers:[
		RequestsService,
		CollapseService		
	]
})

export class ContentModule {}