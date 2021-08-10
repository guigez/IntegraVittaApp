import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicioSelecionadoPage } from './exercicio-selecionado.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicioSelecionadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicioSelecionadoPageRoutingModule {}
