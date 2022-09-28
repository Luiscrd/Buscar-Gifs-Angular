import { Component } from '@angular/core';
import { GifsService } from './services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent {

  get resultados(){

    return this.gifsService.resultados;

  }

  constructor( private gifsService: GifsService ) {}

};
