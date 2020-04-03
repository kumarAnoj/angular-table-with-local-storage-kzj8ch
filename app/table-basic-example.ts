import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

const ELEMENT_DATA: any[] = [
  {name: 'Hydrogen', cert: 1.0079, cgpa: 'H'},
  {name: 'Helium', cert: 4.0026, cgpa: 'He'},
 
];
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
   displayedColumns: string[] = ['name', 'cert', 'cgpa'];
  recs = new MatTableDataSource([]);

  constructor() {
    var data = localStorage.getItem('data');
    if(data)
    {
      var parsedData = JSON.parse(localStorage.getItem('data'));
      this.recs = new MatTableDataSource(parsedData);
    }
    else{
    localStorage.setItem('data',JSON.stringify(ELEMENT_DATA));
    var parsedData = JSON.parse(localStorage.getItem('data'));
    this.recs = new MatTableDataSource(parsedData);
    }
  }
}