import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Constants, RequestsService } from './../../_common';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewChecked {

	constructor(private route: ActivatedRoute,private location: Location, private requestsService : RequestsService) { }
	public user : string;
	public url : string = Constants.END_POINT.pokemons;
	public parser: any;
	public images : any;
	public abilities : any;
	public stats : any;
	public types : any;
	public height : number;
	public weight : number;
	public name : string;
	public img_principal : string;
	ngOnInit() {
		document.getElementById('spinner').classList.remove('hidden');
		const id = this.route.snapshot.paramMap.get('id');
		this.requestsService.get('pokemon/'+ id + '/')
		.subscribe((res) => {
			if(res._body)
				this.init(res._body);
		});
	}

	ngAfterViewChecked(){
		document.getElementById('spinner').classList.add('hidden');
	}

	init(body){
		this.parser = JSON.parse(body);
		this.images = this.parser.sprites;
		this.img_principal = this.images.front_default;
		this.abilities = this.parser.abilities;
		this.stats = this.parser.stats;
		this.types = this.parser.types;
		this.height = this.parser.height;
		this.weight = this.parser.weight;
		this.name = this.parser.name;		
	}


	mudaImagem(img){
		this.img_principal = img;
	}

}
