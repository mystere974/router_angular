import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId = 10;
  isActive=true;
  inputValue = 'écris ici';
  displayValue='';

  ngOnInit(): void {
    setTimeout(() =>this.isActive = true, 1000);
  }

  getInput(event:any): void {
    console.log(event.target.value)
  }

}
