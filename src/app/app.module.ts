import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PigComponent } from './pig/pig.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './add-form/add-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    PigComponent,
    TableComponent,
    AddFormComponent,
    MapComponent,
    InfoPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    DatePipe,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
