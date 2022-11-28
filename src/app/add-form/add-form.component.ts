import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{

  addForm: FormGroup

  constructor() {
    let FormControls = {
      name: new FormControl('', [Validators.required]),
      phone_num: new FormControl('', [Validators.required]),
      breed: new FormControl('', [Validators.required]),
      pid: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required]),

    }
    this.addForm = new FormGroup(FormControls)
  }
  
  onSubmit() {
    console.log(this.addForm.value)
    
  }

  ngOnInit(): void {

  }

}
