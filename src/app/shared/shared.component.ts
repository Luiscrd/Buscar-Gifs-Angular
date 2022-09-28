import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {}

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    if (valor.length !== 0) {

      this.gifsService.buscarGifs(valor);

      this.txtBuscar.nativeElement.value = '';

    };

  };

};
