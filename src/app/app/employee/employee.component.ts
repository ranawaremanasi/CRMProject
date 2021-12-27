import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  country=['USA','India','UK','Italy'];
subject=['Angular','React','Vue','HTML']
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value:any)
  {
    console.log(value);
  }



}