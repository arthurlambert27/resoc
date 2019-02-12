import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './composants/acceuil/acceuil.component';
import { AuthComponent } from './auth/auth.component';
import { ParametreComponent } from './parametre/parametre.component';
import { PresentationComponent } from './presentation/presentation.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthService } from 'src/services/auth.service';

const appRoutes: Routes = [
  { path: 'accueil', component: AcceuilComponent},
  { path: '', component: PresentationComponent},
  { path: 'settings', component: ParametreComponent},
  { path: 'authentification', component: AuthComponent},
  { path: "authentification", component: AuthComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AuthComponent,
    ParametreComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
