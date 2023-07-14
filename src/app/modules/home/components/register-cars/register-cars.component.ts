import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { servicesService } from '../services/servicesService.service';
import { Carro } from '../../Models/carros';

@Component({
  selector: 'app-register-cars',
  templateUrl: './register-cars.component.html',
  styleUrls: ['./register-cars.component.scss']
})
export class RegisterCarsComponent implements OnInit {

  constructor(private service: servicesService) { }

  public carrosList: Array<Carro> = [];


  public editCarros(carro: Carro, i: number) {
    this.service.mostraCarro(carro, i);
  }

  public deleteCarros(i: number) {
    this.service.deleteCarros(i);
  }

  ngOnInit(): void {
    this.carrosList = this.service.getList();
  }
}