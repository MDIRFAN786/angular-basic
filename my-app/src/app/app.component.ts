import { Component } from '@angular/core';



type User = {
  name:string;
  age:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

  // interface ApiResponse {

  //   name: string;
  //   age: number;
  // }


  value:string = '';

  users: User[] = [
    { name: 'abin', age: 10 },
    { name: 'jerin', age: 20 },
    { name: 'jain', age: 15 },
  ];

  searchResult = [...this.users];


  selected :User | null = null;





  filterUser(inputValue : string) {
    this.value = inputValue;
    this.searchResult = this.users.filter((student) =>
      student.name.toLowerCase().includes(this.value.toLowerCase())
    );
  }

  Onkeyup(event:KeyboardEvent , inputValue:string){
    this.value = inputValue;
    if(event.key==='Enter')
      this.searchResult = this.users.filter((student) =>
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