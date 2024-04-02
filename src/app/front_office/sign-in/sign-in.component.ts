import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
//this.router.navigate(['/status']);
signInForm: FormGroup = new FormGroup({});
submitted = false;

constructor(private formBuilder: FormBuilder,
            private router:Router) { }

ngOnInit(){
  this.signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  })
}

get f() { return this.signInForm.controls; }
  
  
onSubmit(){
  this.submitted = true;

  if (this.signInForm.invalid) {
      return;
  }
  this.router.navigate(['/status']);
  
}

}
