import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubUser } from 'src/app/types';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input()
  detail!:GithubUser[];// ! now it is like override

@Output()
  onUserSelect:EventEmitter<GithubUser | null> = new EventEmitter();

  onDetail(){
    this.onUserSelect.emit();
  }
}
