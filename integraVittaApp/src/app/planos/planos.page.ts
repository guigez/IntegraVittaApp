import { Component, OnInit } from '@angular/core';
import { Plano } from '../models/plano';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-planos',
  templateUrl: 'planos.page.html',
  styleUrls: ['planos.page.scss']
})
export class PlanosPage implements OnInit {

  planos : Plano[] = new Array<Plano>();

  constructor(private rest: RestService) {}

  ngOnInit(): void {
    this.buscarPlanos();
  }

  buscarPlanos(): void {
    this.rest.getPlano().then((data) => data.subscribe(res => {
      this.planos.push(res.data.plano)
      console.log(res)
    }))
  }

  abrirPlano(plano): void {
    localStorage.setItem('nom', plano.nome);
    localStorage.setItem('des', plano.descricao);
    localStorage.setItem('ex', JSON.stringify(plano.exercicios));
  }

}
