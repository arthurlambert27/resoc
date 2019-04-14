import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

// Firebase modules

import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';




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
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ViewcoursComponent } from './viewcours/viewcours.component';

import { KatexModule } from 'ng-katex';


firebase.initializeApp(environment.firebaseConfig);

const appRoutes: Routes = [
  { path: 'accueil', component: AcceuilComponent},
  { path: '', component: PresentationComponent},
  { path: 'settings', component: ParametreComponent},
  { path: 'parametre', component: ParametreComponent},
  { path: "cours", component: ListeCoursComponent, data: { animation: 'liste' }},
  { path: 'dashboard', component: ListeCoursComponent},
  { path: "signup", component: SignupComponent},
  { path: "signin", component: SigninComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'cours/:id', component: ViewcoursComponent,   data: { animation: 'cours' }},



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
    SigninComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ViewcoursComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    KatexModule


  ],
  providers: [
    AuthService,
    CoursService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
