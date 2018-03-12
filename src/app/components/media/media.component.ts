import { Media } from '../../model/eventModel/Media';
import { MediaService } from './../../service/eventService/media.service';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  listeMedia:Media[];
  constructor(private service:MediaService) { }
    categoryView = '';
    changeCategoryView(view : string){
    this.categoryView = view;
  }


  ngOnInit() {
         this.service.getMedia().
     subscribe((resp)=>{
       console.log(resp.json());
       this.listeMedia=resp.json();
     })  
}

      uploadMedia (typeMedia : string , path: string ){
    let media = new Media();
        media.typeMedia = typeMedia;
        media.path = path;
        
    this.service.createMedia(media).subscribe(response => {
        console.log(response.json());
        media.id = response.json().id;
      })

  }

}
