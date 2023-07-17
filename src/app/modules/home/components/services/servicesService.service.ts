import { EventEmitter, Injectable } from '@angular/core';
import { Carro } from '../../Models/carros';

@Injectable({
  providedIn: 'root'
})
export class servicesService {

  constructor() { }

  public emitEvent = new EventEmitter();

  private carro = {
    marca: "",
    placa: "",
    ano: "",
    tipo: ""
  }

  private list: Array<Carro> = JSON.parse(localStorage.getItem("carros") || '[]');

  public add(carro: any) {
    this.list.push(carro);
  }

  public mostraCarro(carro: Carro, i:number) {
    let nCarro: Carro = {
      marca: carro.marca,
      placa: carro.placa,
      ano: carro.ano,
      tipo: carro.tipo
    }
    this.emitEvent.emit([nCarro, i]);
  }

  public getList() {
    return this.list;
  }
  public addCarro(carro: Carro) {
    this.list.push(carro);
    localStorage.setItem('carros', JSON.stringify(this.list));
  }

  public deleteCarros(event: number) {
    this.list.splice(event, 1);
    localStorage.setItem('carros', JSON.stringify(this.list));
  }

}
