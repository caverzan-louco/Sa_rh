import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './views/inicio/inicio.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { HttpClientModule } from '@angular/common/http';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PainelCurriculosComponent } from './views/painel-curriculos/painel-curriculos.component';
import { AdminComponent } from './views/admin/admin.component';
import { RegistroComponent } from './views/registro/registro.component';
import { LoginComponent } from './views/login/login.component';
import { AddCurriculoComponent } from './views/addcurriculo/addcurriculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CurriculosComponent,
    VagasComponent,
    PainelVagasComponent,
    PainelCurriculosComponent,
    AdminComponent,
    RegistroComponent,
    LoginComponent,
    AddCurriculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
