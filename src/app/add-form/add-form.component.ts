import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms'
import { ApiServiceService } from '../api-service.service';
import { MatDialogRef } from '@angular/material/dialog'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{

  addForm: FormGroup

  constructor(private api: ApiServiceService,
              private datepipe: DatePipe,
              private dialogRef: MatDialogRef<AddFormComponent>) {

    const date = new Date();

    let FormControls = {
      name: new FormControl('', [Validators.required]),
      phone_num: new FormControl('', [Validators.required]),
      breed: new FormControl('', [Validators.required]),
      pid: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required]),
      id: new FormControl(this.datepipe.transform(date, 'yyyyMMddhmmssa')),
      time: new FormControl(this.datepipe.transform(date, 'yyyy-MM-dd (h:mm:ss a)')),
      status: new FormControl('Ready for pickup')
    }
    this.addForm = new FormGroup(FormControls)
  }

  onSubmit() {
    if(this.addForm.valid) {
      this.api.post(this.addForm.value).subscribe({
        next:(data)=>{
          this.addForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding product")
        }
      })
    }
  }

  ngOnInit(): void {
    
  }

}
