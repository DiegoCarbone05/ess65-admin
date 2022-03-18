import { News } from './../../../models/news';
import { NewsService } from './../../../services/news.service';
import { UiService } from 'src/app/services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsData:any[] = []

  constructor(public uiSvc:UiService, private newsSvc:NewsService) { }

  ngOnInit(): void {
    this.newsSvc.newsData$.subscribe((listaNueva)=>{
      this.newsData = listaNueva.sort((a, b) => -(a.date - b.date));
    })
  }

  deleteNews(id:any){
    this.newsSvc.removeNews(id).subscribe((value)=>{
      this.newsSvc.getNewsDataFromServer()
    })
  }

  openNewsEditor(){
    this.uiSvc.editMode = !this.uiSvc.editMode
  }


}
