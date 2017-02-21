import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'; 

import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	
	private username : string;
	private client_id = '1cb7a57a9ade249ca4ff';
	private client_secret = '2a16be24540790e3ca62936a4e90f5976cff522c';

	constructor(private _http : Http){
		console.log("Github services are ready to start....!!");
		this.username = "qamarkhan0007";
	}
	getUser(){
	return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}

	getRepos(){
	return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}

	updateUser(username : string){
		this.username=username;
	}

}