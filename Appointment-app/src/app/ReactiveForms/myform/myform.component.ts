import { Component } from '@angular/core';
import { FormGroup,FormArray,FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {
  userForm!:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      name:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  submit(){
    if (this.userForm.valid) {
      console.log(this.userForm.value)
    }
  }
}
