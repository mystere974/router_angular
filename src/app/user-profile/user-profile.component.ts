import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name: string = 'Doe';
  firstName: string = 'John';
  age: number = 25;
  quote: any = '' ;
  photo: any = 'https://randomuser.me/api/portraits/lego/2.jpg';
  displayAge = true;

  constructor() { }

  ngOnInit(): void {

  }
  displayOnOff(){
    this.displayAge = !this.displayAge;
  }

}
