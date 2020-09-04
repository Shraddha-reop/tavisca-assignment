import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../account/layout/layout.component';
import { AddEditComponent } from '../user/add-edit/add-edit.component'
import { ListComponent } from '../user/list/list.component'
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'add', component: AddEditComponent },
        { path: 'edit/:id', component: AddEditComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
