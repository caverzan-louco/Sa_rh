import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './views/painel-curriculos/painel-curriculos.component';
import { AdminComponent } from './views/admin/admin.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { authGuard } from './guardas/auth-guard';
import { AddCurriculoComponent } from './views/addcurriculo/addcurriculo.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'curriculos',component:CurriculosComponent},
  {path: 'vagas', component:VagasComponent},
  {path: 'curriculos/novo', component: AddCurriculoComponent, canActivate: [authGuard], data: { autorizado: 'cliente' }},
  {path: 'painel-vagas', component: PainelVagasComponent, canActivate: [authGuard], data: { autorizado: 'admin' }},
  {path: 'painel-curriculos', component: PainelCurriculosComponent, canActivate: [authGuard], data: { autorizado: 'admin' }},
  {path: 'admin', component: AdminComponent, canActivate: [authGuard], data: { autorizado: 'admin' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
