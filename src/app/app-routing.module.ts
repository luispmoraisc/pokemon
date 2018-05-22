import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_common/index';

const appRoutes: Routes = [
	{ 
		path: '', 
		loadChildren: './content/content.module#ContentModule', 
		canActivate : [AuthGuard]			
	},		
    { path: 'login', component: LoginComponent},    
    { path: '**', redirectTo: '404'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	],
	providers : []
})

export class AppRoutingModule {}