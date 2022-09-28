import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { GifsSearch, Images, Datum } from '../../../interfaces/listaGifsInterface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey: string = environment.GIPHY;
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs/';
  private _historial: string[] = [];
  public resultados: Datum[] = [];

  get historial(): string[] {

    if (this._historial.length >= 17) {

      this._historial = this._historial.splice(0, 17);

    }

    localStorage.setItem('historial', JSON.stringify(this._historial));

    return [...this._historial];

  };

  constructor(private http: HttpClient) {

    if (localStorage.getItem('historial')) {

      this._historial = JSON.parse(localStorage.getItem('historial')!);

    };

    if (localStorage.getItem('resultados')) {

      this.resultados = JSON.parse(localStorage.getItem('resultados')!);

    };

  };

  buscarGifs(valor: string) {

    valor = valor.toLocaleLowerCase();

    if (this._historial.includes(valor)) { return };

    this._historial.unshift(valor);

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('q', valor)
    .set('limit',12)
    .set('lang','es');

    this.http.get<GifsSearch>(`${this.servicioUrl}search`,{ params })
      .subscribe((resp: any) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });

  };

  mostrarGifs(valor: string) {

    valor = valor.toLocaleLowerCase();

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('q', valor)
    .set('limit',12)
    .set('lang','es');

    this.http.get<GifsSearch>(`${this.servicioUrl}search`,{ params })
      .subscribe((resp: any) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });

  };

  borrar(){
    this._historial = [];
    this.resultados = [];
  }

};
