import { Media } from '../../model/eventModel/Media';
import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions} from '@angular/http';


let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });


@Injectable()
export class MediaService {
 private URL="http://localhost:18080/EasyMission-web/rest/media";
 private URLGET ="http://localhost:18080/EasyMission-web/rest/media/event/";
  liste:Media[];

  constructor(private http:Http) { }
  getMedia(){
    return this.http.get(this.URL);
  }

  getMediaByEvent(ide : number){
    return this.http.get(this.URLGET+ide);
  }


    
  createMedia(media){
    return this.http.post(this.URL, JSON.stringify(media),options) ; 
  }
/*
  updatePost(place){
    return this.http.patch(this.URL+'/'+post.id, {title :"hello"});
  }
  deletePost(post){
    return this.http.delete(this.URL+'/'+post.id, JSON.stringify(post));
  }
*/

}