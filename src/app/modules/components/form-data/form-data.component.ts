import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  standalone: false,
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {
  activeIndex = 1;
  currentFormKey: string = 'personInfo';

  formKeys = ['personInfo', 'experience', 'education', 'skills', 'projects'];

  personInfoForm: FormGroup;
  experienceForm: FormGroup;
  educationForm: FormGroup;
  skillsForm: FormGroup;
  projectsForm: FormGroup;

  constructor() {
    this.personInfoForm = this.initPersonInfoForm();
    this.experienceForm = this.initExperienceForm();
    this.educationForm = this.initEducationForm();
    this.skillsForm = this.initSkillsForm();
    this.projectsForm = this.initProjectsForm();
  }

  ngOnInit(): void {}

  private initPersonInfoForm(): FormGroup {
    return new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      cityAddress: new FormControl(''),
      summary: new FormControl(''),
    });
  }

  private initExperienceForm(): FormGroup {
    return new FormGroup({
      workExperiences: new FormArray([])
    });
  }

  private initEducationForm(): FormGroup {
    return new FormGroup({
      educations: new FormArray([])
    });
  }

  private initSkillsForm(): FormGroup {
    return new FormGroup({
      skills: new FormArray([])
    });
  }

  private initProjectsForm(): FormGroup {
    return new FormGroup({
      projects: new FormArray([])
    });
  }

  displayForm(formIndex: number): void {
    this.activeIndex = formIndex;
    this.currentFormKey = this.formKeys[formIndex - 1];
  }


  getActiveForm(): FormGroup {
    switch (this.currentFormKey) {
      case 'personInfo':
        return this.personInfoForm;
      case 'experience':
        return this.experienceForm;
      case 'education':
        return this.educationForm;
      case 'skills':
        return this.skillsForm;
      case 'projects':
        return this.projectsForm;
      default:
        return this.personInfoForm;
    }
  }

}
