import { Component } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  HEROES:Hero[]=[
    {id:1, name:'Ghost',description:'a'},
    {id:2, name:'Alias-Battleworn',description:'Se agregó al juego el 26 de marzo de 2021. \nEspecialista en Atlas \nMujer \nDescripción: Alias apuesta en grande para obtener recompensas del mismo calibre. Aunque sea un poco imprudente, será tu mejor as bajo la manga gracias a su altísimo nivel de destreza'},
    {id:3, name:'Dusk',description:'a'},
    {id:4, name:'Manta Ray',description:'a'},
    {id:5, name:'Viktor Reznov',description:'a'},
    {id:6, name:'Cassius',description:'a'},
    {id:7, name:'Naomi Mizushima',description:'a'},
    {id:8, name:'Price-Bravo 6',description:'a'},
    {id:9, name:'Beck-Spray Paint',description:'a'},
    {id:10, name:'Tempest',description:'a'}
]; 
}