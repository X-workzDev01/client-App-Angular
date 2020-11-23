import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketDetails } from '../classes/Ticket-details';
import { CreateTicketService } from '../services/createTicket.service';
import { Observable, Observer, of, observable } from 'rxjs';

@Component({
  templateUrl: './createTicket.component.html',
  styleUrls: ['./createTicket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  private createTicket = new TicketDetails();

  constructor(private createTicketService : CreateTicketService, private router : Router) { }

  ngOnInit() {
  }
    createTicketForm = new FormGroup({
    companyName: new FormControl('' , Validators.required),
    model: new FormControl('' , Validators.required),
    serialNo: new FormControl('', Validators.required),
    mcType : new FormControl('' , Validators.required),
    problem : new FormControl('' , Validators.required),
  });

SignUp(CreateTicket)
  {
      this.createTicket.companyName = this.CompanyName.value;
      this.createTicket.model = this.Model.value;
      this.createTicket.serialNo = this.SerialNo.value;
      this.createTicket.mcType = this.McType.value;
      this.createTicket.problem = this.Problem.value;

      this.createTicketService.sendCreateTicketDetails(this.createTicket).subscribe(
        response => {
          var records = JSON.stringify(response)     
          console.log("Response ="+records);
         
          var statusCode = response.body.statusCode;
          console.log('Response Code ='+statusCode);

          if(statusCode==201){
           alert(response.body.message);
           this.router.navigate(['/clients', response]);
           }

           else if (statusCode == 200) {
           alert(response.body.message);
           this.router.navigate(['/clients', response]);
           }
          else
          {
           alert(response.body.message);
           this.router.navigate(['/createTicket']);
          }
         error =>((error: any) => {
           console.log("Error in authentication");
           if (error.status === 500) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 400) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 409) {
               return Observable.throw(new Error(error.status));
           }
           else if (error.status === 406) {
               return Observable.throw(new Error(error.status));
              }
            });
          }
        );
    }

  get CompanyName(){
    return this.createTicketForm.get('companyName');
  }
  get Model(){
    return this.createTicketForm.get('model');
  }
  get SerialNo(){
    return this.createTicketForm.get('serialNo');
  }
  get McType(){
    return this.createTicketForm.get('mcType');
  }
  get Problem(){
    return this.createTicketForm.get('problem');
  }
}