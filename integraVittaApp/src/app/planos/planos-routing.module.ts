import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanosPage } from './planos.page';

const routes: Routes = [
  {
    path: '',
    component: PlanosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanosPageRoutingModule {}
