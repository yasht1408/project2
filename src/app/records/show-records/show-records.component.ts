import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { OperationService } from 'src/app/services/operation.service';

import { Operation } from '../../operation.model';

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {
  records : any;
  data: any;
  id: number;
  record: Operation;
  subscription : Subscription;
  constructor(
              private operationService: OperationService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
     this.onFetchData();
  }

  // displayAllRecords(){
  //   this.records = this.studentService.getRecords();
  //    console.log(this.records)
  // }

  onFetchData(){
    this.records = this.operationService.getRecords();
    console.log(this.data)
    //this.records = this.data;
  }
  onEditItem(index: number){
    console.log(index);
    this.operationService.deleteRecords(index);
    
  }

}
  //   this.subscription = this.studentService.recordsChanged
  //     .subscribe(
  //       (record: Student[]) => {
  //         this.records = record;
  //       }
  //     );
  //   this.records = this.studentService.getRecords();
  
  //    //this.onFetchData();
  // }
  //   // this.onFetchRecords();
  //   // this.route.params.subscribe(
  //   //   (params: Params)=>{
  //   //       this.id = +params['id'];
  //   //       this.record = this.studentService.getRecord(this.id);

  //   //   }
  //   // )
  //   onFetchData(){
  //     this.dataStorageService.fetchRecords()
  //   }
    
  
 
  // onDelete(){
  //   this.studentService.deleteRecord(this.id);
  // }