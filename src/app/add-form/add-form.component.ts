import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiServiceService } from '../api-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
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
              private dialogRef: MatDialogRef<AddFormComponent>,
              @Inject(MAT_DIALOG_DATA) public extraData: any) {

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
    console.log(this.addForm.value)
    if(this.addForm.valid) {
      this.api.post(this.addForm.value).subscribe({
        next:(data)=>{
          alert("Product added successfully")
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
    if(this.extraData) {
      this.addForm.controls['name'].setValue(this.extraData.name);
      this.addForm.controls['phone_num'].setValue(this.extraData.phone_num);
      this.addForm.controls['breed'].setValue(this.extraData.breed);
      this.addForm.controls['pid'].setValue(this.extraData.pid);
      this.addForm.controls['location'].setValue(this.extraData.location);
      this.addForm.controls['latitude'].setValue(this.extraData.latitude);
      this.addForm.controls['longitude'].setValue(this.extraData.longitude);
      this.addForm.controls['notes'].setValue(this.extraData.notes);
      this.addForm.controls['id'].setValue(this.extraData.id);
      this.addForm.controls['time'].setValue(this.extraData.time);
      this.addForm.controls['status'].setValue(this.extraData.status);
      this.addForm.disable();
    }
  }

}
