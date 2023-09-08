import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ViewUserComponent } from './Admin/User-Details/view-user/view-user.component';
import { AddUserComponent } from './Admin/User-Details/add-user/add-user.component';
import { EditUserComponent } from './Admin/User-Details/edit-user/edit-user.component';
import { DeleteUserComponent } from './Admin/User-Details/delete-user/delete-user.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { UserOffersComponent } from './User/user-offers/user-offers.component';
import { UserViewRecordMilkComponent } from './User/user-view-record-milk/user-view-record-milk.component';
import { UserHomePageComponent } from './User/user-home-page/user-home-page.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ViewMilkRecordComponent } from './Admin/Milk-Collection/view-milk-record/view-milk-record.component';
import { DeleteMilkRecordComponent } from './Admin/Milk-Collection/delete-milk-record/delete-milk-record.component';
import { EditMilkRecordComponent } from './Admin/Milk-Collection/edit-milk-record/edit-milk-record.component';
import { AddMilkRecordComponent } from './Admin/Milk-Collection/add-milk-record/add-milk-record.component';
import { AdminViewProductComponent } from './Admin/Products/admin-view-product/admin-view-product.component';
import { AdminAddProductComponent } from './Admin/Products/admin-add-product/admin-add-product.component';
import { AdminDeleteProductComponent } from './Admin/Products/admin-delete-product/admin-delete-product.component';
import { AdminEditProductComponent } from './Admin/Products/admin-edit-product/admin-edit-product.component';
import { AdminHomePageComponent } from './Admin/admin-home-page/admin-home-page.component';
import { AdminViewOffersComponent } from './Admin/offers/admin-view-offers/admin-view-offers.component';
import { AdminAddOffersComponent } from './Admin/offers/admin-add-offers/admin-add-offers.component';
import { AdminDeleteOffersComponent } from './Admin/offers/admin-delete-offers/admin-delete-offers.component';
import { AdminEditOffersComponent } from './Admin/offers/admin-edit-offers/admin-edit-offers.component';
import { AdminViewSchemesComponent } from './Admin/Schemes/admin-view-schemes/admin-view-schemes.component';
import { AdminAddSchemesComponent } from './Admin/Schemes/admin-add-schemes/admin-add-schemes.component';
import { AdminEditSchemesComponent } from './Admin/Schemes/admin-edit-schemes/admin-edit-schemes.component';
import { AdminDeleteSchemesComponent } from './Admin/Schemes/admin-delete-schemes/admin-delete-schemes.component';

const routes: Routes = [
  {path:'',redirectTo:'Main-Page',pathMatch:"full"},
  {path:'Main-Page',component:MainPageComponent},
  {path:'login-Page',component:LoginPagesComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'',redirectTo:'admin-HomePage',pathMatch:'full'},
    {path:'admin-HomePage',component:AdminHomePageComponent},
    {path:'user-Details',component:ViewUserComponent,
    children:[
      {path:'add-User',component:AddUserComponent},
      {path:'edit-User',component:EditUserComponent},
      {path:'view-User',component:ViewUserComponent},
      {path:'delete-User',component:DeleteUserComponent},
    ]},
    {path:'admin-MilkRecord',component:ViewMilkRecordComponent,
    children:[
      {path:'admin-viewMilkRecord',component:ViewMilkRecordComponent},
      {path:'admin-deleteMilkRecord',component:DeleteMilkRecordComponent},
      {path:'admin-editMilkRecord',component:EditMilkRecordComponent},
      {path:'admin-addMilkRecord',component:AddMilkRecordComponent},
    ]},
    {path:'Offer-Details',component:AdminViewOffersComponent,children:[
      {path:'add-Offer',component:AdminAddOffersComponent},
      {path:'view-offer',component:AdminViewOffersComponent},
      {path:'delete-offer',component:AdminDeleteOffersComponent},
      {path:'edit-offer',component:AdminEditOffersComponent}
    ]},
    {path:'Scheme-Details',component:AdminViewSchemesComponent,children:[
      {path:'add-Scheme',component:AdminAddSchemesComponent},
      {path:'edit-Scheme',component:AdminEditSchemesComponent},
      {path:'view-Scheme',component:AdminViewSchemesComponent},
      {path:'delete-Scheme',component:AdminDeleteSchemesComponent},
    ]},
    {path:'Product-Details',component:AdminViewProductComponent,children:[
      {path:'add-Product',component:AdminAddProductComponent},
      {path:'edit-Product',component:AdminEditProductComponent},
      {path:'view-Product',component:AdminViewProductComponent},
      {path:'delete-Product',component:AdminDeleteProductComponent},
    ]},
  ]},

  {path:'user-Register',component:UserRegisterComponent},
  {path:'user-dashboard',component:UserDashboardComponent,children:[
    {path:'',redirectTo:'user-homePage',pathMatch:'full'},
    {path:'user-homePage',component:UserHomePageComponent},
    {path:'user-offers',component:UserOffersComponent},
    {path:'user-viewMilkRecord',component:UserViewRecordMilkComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
