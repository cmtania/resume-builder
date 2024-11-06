import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  standalone: false,
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.scss'
})
export class FormDataComponent implements OnInit {

  isPersonInfoShow = true;
  isExperienceShow = false;
  isEducationShow = false;
  isSkillsShow = false;
  isProjectShow = false;
  activeIndex = 1;

  personInfoForm: FormGroup;
  experienceForm: FormGroup;
  educationForm: FormGroup;
  skillsForm: FormGroup;
  projectsForm: FormGroup;

  constructor(){
    this.personInfoForm = new FormGroup({
      fullName: new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
      cityAddress: new FormControl(""),
      summary: new FormControl(""),
    });

    this.experienceForm = new FormGroup({
      workExperiences: new FormArray([])
    });

    this.educationForm = new FormGroup({
      educations: new FormArray([])
    });

    this.skillsForm = new FormGroup({
      skills: new FormArray([])
    });

    this.projectsForm = new FormGroup({
      projects: new FormArray([])
    });
  }

  ngOnInit(): void {
  }

  displayForm(formIndex: number){
    this.isPersonInfoShow = formIndex === 1;
    this.isExperienceShow = formIndex === 2;
    this.isEducationShow = formIndex === 3;
    this.isSkillsShow = formIndex === 4;
    this.isProjectShow = formIndex === 5;
    this.activeIndex = formIndex;
  }
}
