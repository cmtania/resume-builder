import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdatePersonInfo } from '../../ngxs/resume.actions';
import { SubSink } from 'subsink';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  standalone: false,
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent implements OnInit {

  @Input() personInfoForm = new FormGroup({
    fullName: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    cityAddress: new FormControl(""),
    summary: new FormControl(""),
  });

  constructor(private store: Store) {

  }
 
  ngOnInit(): void {
    console.log("PersonalInfoComponent loaded");
  }

  triggerUpdate($event: any){
    this.store.dispatch(new UpdatePersonInfo(this.personInfoForm));
  }

}
