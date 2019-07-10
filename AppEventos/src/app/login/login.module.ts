import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AuthService } from './core/auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [UserLoginComponent, UserProfileComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
