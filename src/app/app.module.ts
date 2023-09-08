import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AddUserComponent } from './Admin/User-Details/add-user/add-user.component';
import { EditUserComponent } from './Admin/User-Details/edit-user/edit-user.component';
import { DeleteUserComponent } from './Admin/User-Details/delete-user/delete-user.component';
import { ViewUserComponent } from './Admin/User-Details/view-user/view-user.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserOffersComponent } from './User/user-offers/user-offers.component';
import { UserViewRecordMilkComponent } from './User/user-view-record-milk/user-view-record-milk.component';
import { UserHomePageComponent } from './User/user-home-page/user-home-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AddMilkRecordComponent } from './Admin/Milk-Collection/add-milk-record/add-milk-record.component';
import { EditMilkRecordComponent } from './Admin/Milk-Collection/edit-milk-record/edit-milk-record.component';
import { ViewMilkRecordComponent } from './Admin/Milk-Collection/view-milk-record/view-milk-record.component';
import { DeleteMilkRecordComponent } from './Admin/Milk-Collection/delete-milk-record/delete-milk-record.component';
import { AdminAddProductComponent } from './Admin/Products/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from './Admin/Products/admin-edit-product/admin-edit-product.component';
import { AdminDeleteProductComponent } from './Admin/Products/admin-delete-product/admin-delete-product.component';
import { AdminViewProductComponent } from './Admin/Products/admin-view-product/admin-view-product.component';
import { AdminHomePageComponent } from './Admin/admin-home-page/admin-home-page.component';
import { AdminAddOffersComponent } from './Admin/offers/admin-add-offers/admin-add-offers.component';
import { AdminEditOffersComponent } from './Admin/offers/admin-edit-offers/admin-edit-offers.component';
import { AdminViewOffersComponent } from './Admin/offers/admin-view-offers/admin-view-offers.component';
import { AdminDeleteOffersComponent } from './Admin/offers/admin-delete-offers/admin-delete-offers.component';
import { AdminAddSchemesComponent } from './Admin/Schemes/admin-add-schemes/admin-add-schemes.component';
import { AdminEditSchemesComponent } from './Admin/Schemes/admin-edit-schemes/admin-edit-schemes.component';
import { AdminViewSchemesComponent } from './Admin/Schemes/admin-view-schemes/admin-view-schemes.component';
import { AdminDeleteSchemesComponent } from './Admin/Schemes/admin-delete-schemes/admin-delete-schemes.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ViewUserComponent,
    MainPageComponent,
    LoginPagesComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    UserOffersComponent,
    UserViewRecordMilkComponent,
    UserHomePageComponent,
    AdminDashboardComponent,
    AddMilkRecordComponent,
    EditMilkRecordComponent,
    ViewMilkRecordComponent,
    DeleteMilkRecordComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
    AdminDeleteProductComponent,
    AdminViewProductComponent,
    AdminHomePageComponent,
    AdminAddOffersComponent,
    AdminEditOffersComponent,
    AdminViewOffersComponent,
    AdminDeleteOffersComponent,
    AdminAddSchemesComponent,
    AdminEditSchemesComponent,
    AdminViewSchemesComponent,
    AdminDeleteSchemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
