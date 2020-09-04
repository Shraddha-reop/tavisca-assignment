import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../app/helpers/auth.guard'
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./user/user.module').then(x => x.UserModule);

const routes: Routes = [
  // {
  //   path: 'ngrx',
  //   component: NgrxComponent
  // },
  // {
  //   path: 'i18n',
  //   component: InternationalizationComponent
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'login-user',
  //   component: LoginUserComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // }
  { path: 'home', component: HomeComponent},
  { path: 'user', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
