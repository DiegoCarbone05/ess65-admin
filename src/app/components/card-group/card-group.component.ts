import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardData);

  }
  cardData = [
    {
      title:'',
      description:'',
      img:'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G3Th?ver=041a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true',
      url:''
    },
    {
      title:'',
      description:'',
      img:'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G3Th?ver=041a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true',
      url:''
    },
    {
      title:'',
      description:'',
      img:'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G3Th?ver=041a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true',
      url:''
    },
    {
      title:'',
      description:'',
      img:'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4G3Th?ver=041a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true',
      url:''
    },
  ]



}
