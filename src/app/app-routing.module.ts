import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonHomeComponent } from './components/amazon-home/amazon-home.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './components/amazon-womens/amazon-womens.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonElectronicsComponent } from './components/amazon-electronics/amazon-electronics.component';
import { AmazonAdminComponent } from './components/amazon-admin/amazon-admin.component';
import { flush } from '@angular/core/testing';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AmazonDetailsComponent } from './components/amazon-details/amazon-details.component';
import { AmazonMoreDetailsComponent } from './components/amazon-more-details/amazon-more-details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AmazonLoginComponent } from './components/amazon-login/amazon-login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AmazonHomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'mens',component:AmazonMensComponent,canActivate:[AuthGuard]},
  {path:'women',component:AmazonWomensComponent,canActivate:[AuthGuard]},
  {path:'jewelery',component:AmazonJeweleryComponent,canActivate:[AuthGuard]},
  {path:'electronics',component:AmazonElectronicsComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AmazonAdminComponent,canActivate:[AuthGuard]},
  {path:'login',component:AmazonLoginComponent},
  {path:'details/:id',component:AmazonDetailsComponent,
    children:[
      {path:'more/:productId',component:AmazonMoreDetailsComponent}
    ],canActivate:[AuthGuard]
  },
  //wildcard  
  {path:'**',component:NotfoundComponent}
  //{path:'',component:AmazonHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
