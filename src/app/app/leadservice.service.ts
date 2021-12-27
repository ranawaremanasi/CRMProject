import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeadserviceService {

  constructor(private mycl:HttpClient) { }
  getLeadData()
  {
    return this.mycl.get("https://localhost:44355/api/Lead/GetLead");   
  }
  getLeadId(Lead_Id:any)
  {
    return this.mycl.get("https://localhost:44355/api/Lead/GetLeadUsingLeadid?Lead_Id="+Lead_Id);
  }
   insertLead(lead:any)
   {
     return this.mycl.post("https://localhost:44355/api/Lead/AddLead",lead);   
   }
   deleteLead(Lead_Id:any){
    return this.mycl.delete("https://localhost:44355/api/Lead/DeleteLead?Lead_Id="+Lead_Id);
  }
  updateLead(lead:any)
  {
    return this.mycl.put("https://localhost:44355/api/Lead/UpdateLead",lead).subscribe(data=>{console.log("success")})
  }
}