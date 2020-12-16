
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { OperationService } from '../../services/operation.service';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {

  
  constructor(
              private operationService: OperationService,
              private router: Router) { }

  ngOnInit() {
  }
 
  onSubmit(form: NgForm){
    console.log(form);
    const name = form.value.name;
    const age = form.value.age;
    const gender = form.value.gender;
    const email = form.value.email;
    const task = form.value.task;
  
    this.operationService.createRecords(name,age,gender,email,task);

    form.resetForm();

    // if(form.valid){
    //    console.log(form);
    //   const record: Student = {
    //     name: form.value.name,
    //     age: form.value.age,
    //     grade: form.value.grade
    //   };
    //   this.studentService.addRecord(record);
    //   alert('Data added successfully');
    //   form.reset();
    //   this.dataStorageService.storeRecords();

    // }else{
    //   alert('Please enter all the mandatorty fields');
    // }
  }
  onShow(){
    //this.studentService.showRec.next()
    this.router.navigate(['/showrecord']);
  }

} 
