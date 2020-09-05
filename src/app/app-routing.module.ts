import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '../app/helpers/auth.guard'
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  // { path: 'user', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
