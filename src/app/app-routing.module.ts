import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';

const routes: Routes = [
  {
    path: "book",
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: "blog",
    component: BlogListComponent
  },
  {
    path: "profile",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
