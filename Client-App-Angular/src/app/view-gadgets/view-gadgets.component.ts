import { Component, OnInit } from '@angular/core';
import { GadgetService } from '../services/gadgets-details.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { GadgetDetails } from '../classes/Gadgets-details';

@Component({
  selector: 'app-view-gadgets',
  templateUrl: './view-gadgets.component.html',
  styleUrls: ['./view-gadgets.component.scss']
})
export class ViewGadgetsComponent implements OnInit {

  constructor(private gadgetService: GadgetService) { }

  gadgetsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  gadgets: Observable<GadgetService[]>;
  gadget : GadgetDetails = new GadgetDetails();
  deleteMessage=false;
  gadgetlist:any;
  isasiged = false;   


  gadgetform=new FormGroup({
    emailId: new FormControl('' , Validators.required),
    model: new FormControl('' , Validators.required),
    serialNo: new FormControl('', Validators.required),
    mcType : new FormControl('' , Validators.required),
    dateOfAssigne : new FormControl('' , Validators.required),
    status : new FormControl('' , Validators.required),
  });

  getgadgets(clientDetails) { 
    this.gadget = this.EmailId.value;
    this.gadgetService.getGadgetsList(this.gadget.emailId,this.gadget).subscribe(data =>{  
    this.gadgets =data;
    console.log('got data from console='+this.gadgets);
    this.dtTrigger.next();
    })
  }

  ngOnInit() {
    this.isasiged=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };  
  }

  get EmailId(){
    return this.gadgetform.get('emailId');
  }

  get SerialNo(){
    return this.gadgetform.get('serialNo');
  }
  
  get Model(){
    return this.gadgetform.get('model');
  }
  
  get McType(){
    return this.gadgetform.get('mcType');
  }

  get DateOfAssigne(){
    return this.gadgetform.get('dateOfAssigne');
  }

  get Status(){
    return this.gadgetform.get('status');
  }
}
