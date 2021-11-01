import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: '',
   loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'exercicio',
    loadChildren: () => import('./exercicio/exercicio.module').then( m => m.ExercicioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'exercicio-selecionado',
    loadChildren: () => import('./exercicio-selecionado/exercicio-selecionado.module').then( m => m.ExercicioSelecionadoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'esqueceu',
    loadChildren: () => import('./esqueceu/esqueceu.module').then( m => m.EsqueceuPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
