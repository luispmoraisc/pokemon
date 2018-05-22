export class Pokemon{
	public name : string;
	public url : string;
	public id : number;

	constructor(name: string, url : string){
		this.name = name,
		this.url = url,
		this.id = this.getId()
	}

	getId(){ 		
		var explode = this.url.split('/');
		this.id = Number(explode[explode.length - 2]);
		return this.id;
	};
}