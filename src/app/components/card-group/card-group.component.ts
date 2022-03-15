import { Component, OnInit } from '@angular/core';
import { StaticContentService } from 'src/app/services/static-content.service';

@Component({
  selector: 'card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {

  constructor(public staticContentSvc:StaticContentService) { }

  ngOnInit(): void {
    this.loadLastChange()

  }

  cardData = {

    "name": "cardGroup",
    "configs":[
      {
        "title":"",
        "description":"",
        "img":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G3Th?ver=041a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true",
        "url":""
      },
      {
        "title":"",
        "description":"",
        "img":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G3Th?ver=041a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true",
        "url":""
      },
      {
        "title":"",
        "description":"",
        "img":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G3Th?ver=041a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true",
        "url":""
      },
      {
        "title":"",
        "description":"",
        "img":"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G3Th?ver=041a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true",
        "url":""
      },
    ]

  }

  loadLastChange(){
    this.staticContentSvc.getStaticConfig().subscribe((configList) => {
      const cardConfig = configList.find(
        (configItem) => configItem.name === 'cardGroup'
      );
      if (cardConfig) {
        this.cardData = cardConfig;
      }
    });
  }

  saveData(){
    this.staticContentSvc
      .setStaticConfig(this.cardData)
      .subscribe((res) => {});
  }
}
