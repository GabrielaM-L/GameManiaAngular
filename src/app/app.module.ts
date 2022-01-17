import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { HeaderComponent } from './views/header/header.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ParceirosComponent } from './views/parceiros/parceiros.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { FooterComponent } from './views/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    HeaderComponent,
    ClientesComponent,
    ParceirosComponent,
    ContatosComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
