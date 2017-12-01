import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private url:string,private http:Http) { }
  getAll(){
    return this.http.get(this.url).map(resp=>resp.json());
  }
  create(ressource){
  
   return this.http.post(this.url, JSON.stringify(ressource)).map(resp=>resp.json());
  }
  update(ressource){
    return  this.http.patch(this.url+'/'+ressource.id, {title:"hello 4twin2"}).map(resp=>resp.json());
  }
  delete(ressource){
    return this.http.delete(this.url+'/'+ressource.id).map(resp=>resp.json());
  }
}
