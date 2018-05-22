import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from './../../_models';
import { Constants, RequestsService } from './../../_common';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public pokemons : Pokemon[];
	public urlImage : string;
	public filterString : string;	
	public map : any = [
		{
			label : "Dashboard",
			link : "dashboard",
			icon : "icon-home-4"
		}
	];		

	public start : number = 0;
	public end : number = 12;
	public pStart : number = 0;
	public pEnd : number = 10;
	public amostras : any;
	public nPages : number;
	public pagination : any[];
	public pagAtual : number = 1;
	public itensPage : number = 12;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit() {
		this.amostras = [{"key" : 12},{"key":24},{"key":48},{"key":96}];
		this.urlImage = Constants.END_POINT.imageGIT;
		var arrPokemons = this.route.snapshot.data['pokemon'].results.map(item => {
			return new Pokemon(item.name, item.url);
		});			
		this.pokemons = arrPokemons;		

		this.nPages = Math.ceil(this.pokemons.length / this.end);
		this.Pagination();
	}	

	Pagination(){
		var pags = [];
		for(let i = 1; i <= this.nPages; i++){
			pags.push({'pag' : i});
		}

		this.pagination = pags;
		if(this.pagAtual > this.nPages){
			this.pagAtual = this.nPages;
			this.start = (this.nPages * this.itensPage) - this.itensPage;
			this.end = (this.nPages * this.itensPage);
		}

		setTimeout(() => {
			this.removeSpinner();
		}, 3000);
	}

	elementsInGrid(value){	
		this.addSpinner();
		this.start = 0;
		this.end = value;
		this.itensPage = value;		
		// number pages
		this.nPages = Math.ceil(this.pokemons.length / this.end);
		this.Pagination();		
	}

	goToPokemon(id){
		this.router.navigate(['/dashboard']);
	}	

	mudarPagina(value){			
		this.addSpinner();
		this.start = (value * this.itensPage) - this.itensPage;
		this.end = (value * this.itensPage);				
		this.pagAtual = value;	
		setTimeout(() => {
			this.removeSpinner();
		}, 3000);
	}

	PrevPage(){
		this.addSpinner();		
		if(this.pagAtual !== 1)
			this.pagAtual -= 1;			
		this.mudarPagina(this.pagAtual);
	}	

	NextPage(){
		this.addSpinner();		
		if(this.pagAtual !== this.nPages)
			this.pagAtual += 1;			
		this.mudarPagina(this.pagAtual);				
	}

	addSpinner(){
		document.getElementById('spinner').classList.remove('hidden');
	}

	removeSpinner(){
		document.getElementById('spinner').classList.add('hidden');
	}
}
