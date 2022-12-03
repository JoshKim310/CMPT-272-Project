import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { timestamp } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{

  addForm: FormGroup

  constructor(private api: ApiServiceService) {
    let FormControls = {
      name: new FormControl('', [Validators.required]),
      phone_num: new FormControl('', [Validators.required]),
      breed: new FormControl('', [Validators.required]),
      pid: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required]),
      time: new FormControl(new Date())
    }
    this.addForm = new FormGroup(FormControls)
  }

  onSubmit() {
    console.log(this.addForm.value)
    if(this.addForm.valid) {
      this.api.posta(this.addForm.value).subscribe({
        next:(res)=>{
          alert("Product added successfully")
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
