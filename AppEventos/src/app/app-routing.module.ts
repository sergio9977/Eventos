import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './guest/list/list.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './login/users/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'list', component: ListComponent, canActivate: [AuthGuard]
  },
  {
    path: '', component: UserProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
