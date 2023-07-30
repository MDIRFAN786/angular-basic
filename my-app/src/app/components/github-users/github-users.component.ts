import { Component } from '@angular/core';
import { GithubService } from 'src/app/github.service';
import { GithubUser } from 'src/app/types';
@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent {
  searchText:string = '';
  users: GithubUser[] = [];

  constructor(private githubService : GithubService){}

  handleEvent(){
    console.log("hadeleed");
  }



  onSearch(){
    
      
    this.users = [];
    if(!this.searchText){
      console.log(this.searchText);
      return;
    }
    const res = this.githubService.getUsers(this.searchText);
    res.subscribe({
      next: (users)=>{
        this.users = users;
      },
    });
  }
}
