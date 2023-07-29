import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






















// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {

//   // interface ApiResponse {

//   //   name: string;
//   //   age: number;
//   // }

//   value:string = '';
//   students = [
//     { name: 'abin', age: 10 },
//     { name: 'jerin', age: 20 },
//     { name: 'jain', age: 15 },
//   ];

//   searchResult = [...this.students];


//   selected:string='';

//   onKeyup(event : KeyboardEvent,inputValue : string){
//     this.value = inputValue;
//     this.searchResult = this.students.filter((student) =>
//       student.name.toLowerCase().includes(this.value.toLowerCase())
//     );
//   }



// //   onSearch(inputValue: string) {
// //     this.value = inputValue;
// //     this.filterUser();
// //   }

// // }
// }