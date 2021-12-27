import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { LeadserviceService } from '../leadservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addlead',
  templateUrl: './addlead.component.html',
  styleUrls: ['./addlead.component.css']
})
export class AddleadComponent implements OnInit {
  
  myForm:FormGroup;

  constructor(private fb: FormBuilder,private leadserv:LeadserviceService, public actRoute: ActivatedRoute,
    public router: Router) {
    this.myForm=this.fb.group({
      name:new FormControl('',[Validators.required,Validators.minLength(4)]),
      email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
      phone:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      gender: new FormControl(''),
      add: new FormControl(''),
      date: new FormControl(''),
      });
   }

  ngOnInit(): void {  
  }

  lead:any;
  onSubmit(form:FormGroup)
  {
    this.lead={
            Lead_Name:form.value.name,
            Lead_Email:form.value.email,
           Lead_Phone: form.value.phone, 
           Lead_Gender:form.value.gender,
           Lead_Address:form.value.add,
           Lead_Gen_Date:form.value.date,
    }
    this.leadserv.insertLead(this.lead).subscribe(Response=>{this.lead=Response});
      console.log(form.value);
      this.router.navigate(['./adminlead']);
  }

}
