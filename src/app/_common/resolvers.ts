import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AlertService } from './../_shared';
import { Observable } from 'rxjs';
import { Constants } from './constants';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class ResolverPokemons{
	private url : string;
	constructor(
		public http: HttpClient, 
		private router : Router,
		private alertService: AlertService){
		this.url = Constants.END_POINT.pokemons;
	}
	resolve(state: RouterStateSnapshot): Observable<any>{				
		document.getElementById('spinner').classList.add('loading');
		return this.http.get(this.url + 'pokemon/?limit=950').catch((error: any) => {					
			if (error.status === 500) {
				this.alertService.error("Erro ao buscar dados", true);
                return Observable.of(false);
            }
            else if(error.status === 400){
            	this.alertService.error("Ocorreu um erro na requisição", true);            	
            	return Observable.of(false);
            }
		});
	}
}

