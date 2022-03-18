import { News } from './../models/news';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private apiSvc:ApiService) {
    this.getNewsDataFromServer();
   }
  newsData$ = new BehaviorSubject<any[]>([]);


  getNewsDataFromServer(){
    const obs = this.apiSvc.getNewsData();
    obs.subscribe((news) => {
      this.newsData$.next(news);
    });
    return obs
  }
  setNewsData(news:News){
    const obs = this.apiSvc.setNewsData(news)
    this.getNewsDataFromServer()
    return obs
  }
  removeNews(_id:any) {
    return this.apiSvc.deleteNews(_id);
  }

}
