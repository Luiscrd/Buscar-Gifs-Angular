import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) {}

  buscar(item:string){

    this.gifsService.mostrarGifs(item);

  }

  get historial() {

    return this.gifsService.historial;

  }

  limpiar(){

    this.gifsService.borrar()

  }
}