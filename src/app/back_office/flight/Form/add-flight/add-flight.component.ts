import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFlightComponent>,
             @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {}

  myForm!: FormGroup;
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      flightName: ['', Validators.required],
      date: ['', Validators.required],
      fromCity: ['', Validators.required],
      toCity: ['', Validators.required],
      airport: ['', Validators.required],
      airline: ['', Validators.required],
      price: ['', Validators.required],
      seatNamber: ['', Validators.required],

    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); 
    // console.log('flightName', form.value.flightName);
    // console.log('date', form.value.date);
    // console.log('fromCity', form.value.fromCity);
    // console.log('toCity?', form.valid); 
    // console.log('airport', form.value.airport);
    // console.log('airline', form.value.airline);
    // console.log('price', form.value.price);
    // console.log('seatNamber', form.value.seatNamber);
    if (this.myForm.valid) {
      this.dialogRef.close(this.myForm.value)
    } else {
      console.log('sth is wrong')
    }
  }
}
