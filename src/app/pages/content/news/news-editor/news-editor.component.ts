import { ConfirmDialogComponent } from './../../../../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UiService } from 'src/app/services/ui.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { News, EnabledCourses } from './../../../../models/news';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.scss']
})
export class NewsEditorComponent implements OnInit {

  constructor(private uiSvc:UiService,public dialog: MatDialog, private newsSvc:NewsService) { }

  formGroup!: FormGroup;
  yearsOptions = [1,2,3,4,5,6];
  currentTime = Date.now();
  selectedCourses:EnabledCourses[] = [];

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title:new FormControl("News component",Validators.required),
      showInAlert:new FormControl(false,Validators.required),
    })

  }

  // Checkboxes
  selectYearAndTurn(year:number, turn:string, event:any){
    if(event.checked){//Si check esta en true.

      //Corroborar si ya existe (para evitar duplicados)
      const courseExist = this.selectedCourses
      .find((selectedCourse)=>selectedCourse.course === year && selectedCourse.turn === turn);

      if(!courseExist){
        //Si no existe, se agrega
        this.selectedCourses.push({course:year, turn:turn})
      }
    }
    else{//Si el check esta en false. Eliminar curso de la lista
      this.selectedCourses = this.selectedCourses
      .filter((selectedCourse)=>!(selectedCourse.course === year && selectedCourse.turn === turn));
    }
  }

  saveData(){
    let currentNews:News = {
      title:this.formGroup.controls['title'].value,
      date:this.currentTime,
      showInAlert:this.formGroup.controls['showInAlert'].value,
      enabledCourses:this.selectedCourses,
    }
    if(!this.selectedCourses.length){
      this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: {
          title: "¡Error!",
          body: "Debe seleccionar al menos un curso",
          showCancelButton:true
        },
      });
      return;
    }else{
      this.newsSvc.setNewsData(currentNews).subscribe((retValue)=>{
        this.newsSvc.getNewsDataFromServer()
      })
      this.uiSvc.editMode = false
    }


  }

}
