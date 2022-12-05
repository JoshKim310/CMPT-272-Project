import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';
import { AddFormComponent } from '../add-form/add-form.component';
import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { HashService } from '../hash.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['location', 'name', 'time', 'status', 'action1', 'action2', 'action3'];
  dataSource!: MatTableDataSource<any>;
  pigs: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;  

  constructor(private dialog: MatDialog,
              private api: ApiServiceService,
              private hashService: HashService) {}
 
  openDialog() {
    this.dialog.open(AddFormComponent, {
      width: '40%'
    }).afterClosed().subscribe(val=>{
      if (val ==='save'){
        this.getAll();
      }
    });
  }

  getAll() {
    this.api.get().subscribe({
      next: (data)=>{
        for(let i=0; i<data.length; i++){
          this.pigs.push(data[i].data)
        }
        this.dataSource = new MatTableDataSource(this.pigs);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.pigs = []
      },
      error: (err)=>{
        alert('error while fetching');
      }
    })
  }

  deletePig(id: string) {    
    let pass = prompt("Enter password:");
    this.hashService.get(pass)
    .subscribe((data: any)=>{
      if(data.Digest == "84892b91ef3bf9d216bbc6e88d74a77c") {
        this.api.delete(id).subscribe({
        next: (res)=>{
          this.getAll();
        },
        error:()=>{
          alert('error while delete')
        }
        })
      } else {
        alert("Incorrect Password")
      }
    })

    
  }

  moreInfo(row: any) {
    let pass = prompt("Enter password:");
    this.hashService.get(pass)
    .subscribe((data: any)=>{
      if(data.Digest == "84892b91ef3bf9d216bbc6e88d74a77c") {
        this.dialog.open(InfoPopupComponent,{
        width: '40%',
        data:row
        })
      } else {
        alert("Incorrect Password")
      }
    })
  }

  retrieve(row: any) {
    row.status = 'Retrieved';
    this.api.put(row.id, row).subscribe({
      next:(res)=>{
      }
    })
  }

  ngOnInit(): void {
    this.getAll();
  }
}