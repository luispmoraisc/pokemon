import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollapseService } from './../header/collapse.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	public menu : any = [
		{
			link : 'dashboard',
			icon : 'icon-home-4',
			label : 'Dashboard'
		},
		{
			link : 'energia',
			icon : 'icon-flash',
			label : 'Energia'
		},
		{
			link : 'jogos',
			icon : 'icon-gamepad',
			label : 'Jogos'
		},
		{
			link : 'premios',
			icon : 'icon-award',
			label : 'Meus prêmios'
		},
		{
			link : 'users',
			icon : 'icon-users-1',
			label : 'Usuários'
		},
		{
			link : 'configuracoes',
			icon : 'icon-wrench',
			label : 'Configurações'
		}
	];
	public collapse : boolean = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private collapseService : CollapseService
	) {}
		
	@Input() itensMenu : any;

	ngOnInit() {				
		this.collapseService.getCollapse().subscribe((collapse : boolean )=>{
			this.collapse = collapse;
		});		
	}

	collapseLayout(){
		this.collapseService.collapse();
	}	
}
