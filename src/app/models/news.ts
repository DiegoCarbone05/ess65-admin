export interface News {
  title: string,
  date: number,
  showInAlert:boolean,
  enabledCourses:EnabledCourses[];
}

export interface EnabledCourses{
  course:number;
  turn:string;
}
