import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  standalone: false,
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.scss'
})
export class FormDataComponent implements OnInit {

  isPersonInfoShow = true;
  isExperienceShow = false;
  activeIndex = 1;

  personInfoForm: FormGroup;
  experienceForm: FormGroup;

  constructor(){
    this.personInfoForm = new FormGroup({
      fullName: new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
      cityAddress: new FormControl(""),
      summary: new FormControl(""),
    });

    this.experienceForm = new FormGroup({
      company: new FormControl(""),
      position: new FormControl(""),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      jobSummary: new FormControl(""),
      currentlyWork: new FormControl(false)
    });
  }

  ngOnInit(): void {
  }

  displayForm(formIndex: number){
    this.isPersonInfoShow = formIndex === 1;
    this.isExperienceShow = formIndex === 2;
    this.activeIndex = formIndex;
  }
}
