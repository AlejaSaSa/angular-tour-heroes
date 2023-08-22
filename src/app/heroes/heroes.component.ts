import { Component } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  HEROES:Hero[]=[
    {id:1, name:'Ghost'},
    {id:2, name:'Alias-Battleworn'},
    {id:3, name:'Dusk'},
    {id:4, name:'Manta Ray'},
    {id:5, name:'Viktor Reznov'},
    {id:6, name:'Cassius'},
    {id:7, name:'Naomi Mizushima'},
    {id:8, name:'Price-Bravo 6'},
    {id:9, name:'Beck-Spray Paint'},
    {id:10, name:'Tempest'}
]; 
}