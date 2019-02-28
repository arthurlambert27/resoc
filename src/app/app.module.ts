import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './composants/acceuil/acceuil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { PresentationComponent } from './presentation/presentation.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { CoursComponent } from './cours/cours.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { CoursService } from "src/services/cours.service";
import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


const appRoutes: Routes = [
  { path: 'accueil', component: AcceuilComponent},
  { path: '', component: PresentationComponent},
  { path: 'settings', component: ParametreComponent},
  { path: "cours", component: ListeCoursComponent},
  { path: "signup", component: SignupComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ParametreComponent,
    PresentationComponent,
    CoursComponent,
    ListeCoursComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    CoursService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
