import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Operation } from '../operation.model'


@Injectable({ providedIn: 'root'})
export class OperationService{
    constructor(private http: HttpClient){}
    dataChanged = new Subject();

    private records = [];

    createRecords(name: string, age: number, gender:string, email: string, task: string){
        const record: Operation = { name: name, age: age, gender:gender, email: email, task : task};
        this.http.post<{Operation}>('http://localhost:3000/createstudent',record).subscribe(
            responseData=>{
                this.records.push(record);
                this.dataChanged.next([...this.records]);
            }
        )
    }
    getRecords(){
         this.http.get<Operation[]>('http://localhost:3000/getstudent').subscribe(records=>{
            this.records= records;
            this.dataChanged.next([...records])
         })
    }
    deleteRecords(id){
        this.http.delete('http://localhost:3000/deletestudent/' + id).subscribe(
            ()=>{
                const updatedRecords = this.records.filter(record=>record.id !=id);
                this.records = updatedRecords;
                this.dataChanged.next([...this.records]);
            }
        )
    }
}