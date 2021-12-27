import { Component, OnInit } from '@angular/core';
import { LeadserviceService } from '../leadservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import{SearchPipe} from '../search.pipe';

@Component({
  selector: 'app-getleaddata',
  templateUrl: './getleaddata.component.html',
  styleUrls: ['./getleaddata.component.css']
})
export class GetleaddataComponent implements OnInit {
  lead:any;
  searchText:any;
  //Leadid=this.actRoute.snapshot.params['Lead_Id'];
  constructor(private leadserv:LeadserviceService) { }

  ngOnInit(): void {
    this.leadserv.getLeadData().subscribe(Response=>{this.lead=Response});
    this.getLeadData1();
  }

 
  getLeadData1() {
    return this.leadserv.getLeadData().subscribe((Response: {}) => {
      this.lead = Response;
    })
  }

  deleteLead(Lead_Id:any) 
  {
     if (window.confirm('Are you sure, you want to Delete details?')){
      this.leadserv.deleteLead(Lead_Id).subscribe(Response=>{ this.ngOnInit();});   
       }
  }
  
  
  

}
