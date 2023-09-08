import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-view-record-milk',
  templateUrl: './user-view-record-milk.component.html',
  styleUrls: ['./user-view-record-milk.component.css']
})
export class UserViewRecordMilkComponent {
  displayedColumns:string[] =['Id','date','milk','fat','rupees']
  dataSource!:MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort
  Branches:any;

  applyFilter($event:any){

  }
}
