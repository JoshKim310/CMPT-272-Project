import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';
import { AddFormComponent } from '../add-form/add-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['location', 'name', 'time', 'pid', 'action'];
  dataSource!: MatTableDataSource<any>;
  pigs: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiServiceService) {

  }

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
        console.log(data);
        console.log('PIGS', this.pigs)
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
    this.api.delete(id).subscribe({
      next: (res)=>{
        alert('delete successful')
        this.getAll();
      },
      error:()=>{
        alert('error while delete')
      }
    })
  }

  ngOnInit(): void {
    console.log('YOOOOOOOOOOOOOOOO')
    this.getAll();
  }
}
