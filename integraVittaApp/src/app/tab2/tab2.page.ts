import { Component } from '@angular/core';
import { Plano } from '../models/plano';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  planos : Plano[];

  constructor(private rest: RestService) {}

  ngOnInit(): void {
    this.buscarPlanos();
  }

  buscarPlanos(): void {
    this.rest.getPlanoFiltro('').subscribe(res => {
      this.planos = res;
    })
  }

  abrirPlano(plano): void {
    localStorage.setItem('nom', plano.nome);
    localStorage.setItem('des', plano.descricao);
    localStorage.setItem('ex', JSON.stringify(plano.exercicios));
  }

}
