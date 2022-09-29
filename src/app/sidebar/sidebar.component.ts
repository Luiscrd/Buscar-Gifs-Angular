import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) {}

  public selectedIndex: number = 0;

  buscar(item:string, ind:number){

    this.selectedIndex = ind;
    this.gifsService.mostrarGifs(item);

  }

  get historial() {

    return this.gifsService.historial;

  }

  limpiar(){

    this.gifsService.borrar()
    localStorage.clear()

  }
}
