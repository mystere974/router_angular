import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson1';
  isVital: boolean = false;
  displayGuestList: boolean = false;
  songList: string[] = ["Wild Wild West", "Get your freak on", "peppas", "nazereno"]
}
