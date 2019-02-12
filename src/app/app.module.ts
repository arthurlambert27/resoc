import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './composants/acceuil/acceuil.component';
import { AuthComponent } from './auth/auth.component';
import { ParametreComponent } from './parametre/parametre.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AuthComponent,
    ParametreComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
