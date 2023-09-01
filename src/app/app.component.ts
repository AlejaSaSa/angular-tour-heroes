import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HEROES OF CALL OF DUTY';
  
}
export interface Hero{
  id: number;
  name:string;
}
