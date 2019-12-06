import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { AdministradorComponent } from './administrador/administrador.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent, data: {label: 'Home'}},
  { path: 'mensagens', component:  MensagensComponent, data: {label: 'Mensagens'}},
  { path: 'administrador', component: AdministradorComponent, data: {label: 'Administrador'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
