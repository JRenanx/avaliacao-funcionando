import { Component } from '@angular/core';
import { servicesService } from '../services/servicesService.service';
import { Carro } from '../../Models/carros';

@Component({
  selector: 'app-register-add-cars',
  templateUrl: './register-add-cars.component.html',
  styleUrls: ['./register-add-cars.component.scss']
})
export class RegisterAddCarsComponent {

  constructor(private service: servicesService) { }

  public index: number = -1;
  public editar: boolean = false;

  public carro: Carro = {
    marca: "",
    placa: "",
    ano: "",
    tipo: ""
  }

  public confirmaCarro(): boolean {
    if (!this.carro.marca
      || !this.carro.placa
      || !this.carro.ano
      || !this.carro.tipo
    ) {
      return true
    } return false
  }


  public adcionarCarro(carro: Carro, form: any) {
    let novoCarro: Carro = {
      marca: carro.marca,
      placa: carro.placa.toUpperCase(),
      ano: carro.ano,
      tipo: carro.tipo
    }
    form.reset();
    return this.service.addCarro(novoCarro);
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: any) => {
        this.carro = res[0]
        this.index = res[1]
        this.editar = !this.editar
      }
    })
  }

    public editCarro(carro: Carro, form: any) {
    this.service.deleteCarros(this.index)
    this.adcionarCarro(carro, form)
    this.editar = false;
  }

  public resetaEditar(form:any){
    form.reset();
    this.editar = false;
  }
}

