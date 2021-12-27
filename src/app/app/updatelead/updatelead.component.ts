import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { LeadserviceService } from '../leadservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatelead',
  templateUrl: './updatelead.component.html',
  styleUrls: ['./updatelead.component.css']
})
export class UpdateleadComponent implements OnInit {

  lid:any;
  lobj:any;
  leadId:any;
  leadInfo:any
  myForm:FormGroup;
  constructor(private fb: FormBuilder, private leadserv:LeadserviceService,public actRoute: ActivatedRoute,
    public router: Router) { 
    this.myForm=this.fb.group({
      name:new FormControl('',[Validators.required,Validators.minLength(4)]),
      email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
      phone:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      
      });
  }

  ngOnInit(): void {
    
    this.leadId=this.actRoute.params.subscribe(params=>{
    this.lid=params['id'];
  
    this.leadserv.getLeadData().subscribe(data=>{
    this.leadInfo=data;
    this.lobj=this.leadInfo.find((l: { Lead_Id: any; })=>l.Lead_Id==this.lid);
    
    this.myForm = new FormGroup({
      
      name: new FormControl(this.lobj.Lead_Name),
      email: new FormControl(this.lobj.Lead_Email),
      phone: new FormControl(this.lobj.Lead_Phone),
      gender: new FormControl(this.lobj.Lead_Gender),
      add: new FormControl(this.lobj.Lead_Address),
      date: new FormControl(this.lobj.Lead_Gen_Date),
    });



  })
})
  }
  
  lead:any
  onSubmit(form:FormGroup)
  {
    console.log(form.value);
    this.lead={
      Lead_Id:this.lid,
      Lead_Name:form.value.name,
      Lead_Email:form.value.email,
     Lead_Phone: form.value.phone, 
     Lead_Gender:form.value.gender,
     Lead_Address:form.value.add,
     Lead_Gen_Date:form.value.date,
        }
        this.updateLead(this.lead);
  }

  updateLead(lead:any)
  {
    console.log(lead);
    if(window.confirm('Are you sure, you want to Update details?')){
      this.leadserv.updateLead(lead);
      this.router.navigate(['./adminlead']);
    }
  }

}
