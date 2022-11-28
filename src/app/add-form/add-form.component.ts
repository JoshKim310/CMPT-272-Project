import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{

  addForm: FormGroup

  constructor() {
    let FormControls = {
      name: new FormControl(''),
      phone_num: new FormControl(''),
      breed: new FormControl(''),
      pid: new FormControl(''),
      location: new FormControl(''),
      notes: new FormControl(''),

    }
    this.addForm = new FormGroup(FormControls)
  }

  onSubmit(values: string) {
    console.log(values)
    
  }

  ngOnInit(): void {

  }

}
