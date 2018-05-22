import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { AuthGuard } from './../_common';

import { ResolverPokemons } from './../_common'


import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
	{
		path: '',
		component: ContentComponent,
		children: [
			{ 
				path: 'dashboard', 
				loadChildren: './dashboard/dashboard.module#DashboardModule'
				,canActivate: [AuthGuard],
				resolve: {
					pokemon : ResolverPokemons
				}
			},
			{
				path: 'detail/:id',
				component: DetailComponent,
				canActivate: [AuthGuard]				
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
	providers:[		
		ResolverPokemons
	]
})

export class ContentRoutingModule {}