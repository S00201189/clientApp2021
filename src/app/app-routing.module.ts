import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book2/book-list/book-list.component';
import { LoginComponent } from '../app/user/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 {path: '', component: HomeComponent},
  {path: 'books',component: BookListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
