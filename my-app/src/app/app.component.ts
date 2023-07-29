import { Component } from '@angular/core';
import { User } from './types';
import { AppService } from './app.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  users:User[] = [];
  filterUser:User[] = [];




  constructor(private appService:AppService){
    
  }

  ngOnInit(){
    const obs = this.appService.getUser();

    obs.subscribe((users)=>{
      this.users = users;
      this.filterUser = [...this.users]
    })

    this.filterUser = [...this.users];
  }


  value:string = '';
  

 
  imgUrl : string = 'https://i.imgur.com/XgbZdeA.jpeg';

  selected :User | null = null;





  filterUsers(inputValue : string) {
    this.value = inputValue;
    this.filterUser = this.users.filter((student) =>
      student.name.toLowerCase().includes(this.value.toLowerCase())
    );
  }

  Onkeyup(event:KeyboardEvent , inputValue:string){
    this.value = inputValue;
    if(event.key==='Enter')
      this.filterUser = this.users.filter((student) =>
        student.name.toLowerCase().includes(this.value.toLowerCase())
      );
  }


  onSelectUser(inputValue:User){
    this.selected = inputValue;
  }


//   onSearch(inputValue: string) {
//     this.value = inputValue;
//     this.filterUser();
//   }

// }
}