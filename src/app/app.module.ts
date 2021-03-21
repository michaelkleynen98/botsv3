import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { config } from 'rxjs';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';



var firebaseConfig = {
  apiKey: "AIzaSyDjkVoGFiyqDLjTNwCvc7bE7oayJImRRag",
  authDomain: "dbotsfinal.firebaseapp.com",
  projectId: "dbotsfinal",
  storageBucket: "dbotsfinal.appspot.com",
  messagingSenderId: "726212118380",
  appId: "1:726212118380:web:fc705c4497dd40dde81549",
  measurementId: "G-XTQC8T2ZGX"
};

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path:'main', component: MainComponent },
  { path: 'products', component: ProductsComponent },
  { path:'contact', component: ContactComponent},
  { path:'about-us', component: AboutUsComponent},
  { path:'login', component: LoginComponent},

  //firebase
  { path:  'register', component:  RegisterComponent },
  { path:  'forgot-password', component:  ForgotPasswordComponent },
  { path:  'verify-email', component:  VerifyEmailComponent }
  


];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}