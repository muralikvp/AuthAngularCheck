import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'todo', component: TodoComponent,
  children: [
    {
      path: 'Polo',
      component: ListingComponent,
    }],
  canActivate: [AuthGuard] },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: '',
        component: ListingComponent,
      },
      { path: 'create', component: AddnewComponent },
      { path: 'Edit/:id', component: AddnewComponent },
    ],
    canActivate: [AuthGuard, RoleGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
