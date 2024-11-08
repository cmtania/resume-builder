import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumeDataInterfaceStateModel, ResumeDataState } from '../../ngxs/resume.state';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { FormArray, FormGroup } from '@angular/forms';
import { AddSkills, UpdateEducationForm, UpdateExperienceForm, UpdatePersonInfo, UpdateProjectForm } from '../../ngxs/resume.actions';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-resume-builder',
  standalone: false,
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.scss'
})
export class ResumeBuilderComponent implements OnInit {

  // personalInfo$?: Observable<any> = inject(Store).select(ResumeDataState.getPersonalInfo);
  @Select(ResumeDataState.getPersonalInfo) personalInfo$!: Observable<FormGroup>;
  
  fullname = "";
  email = "";
  phone = "";
  cityAddress = "";
  summary = "";

  workExperiences: Array<any> = [];
  educations: Array<any> = [];
  skills: Array<string> = [];
  projects: Array<any> = [];

  private subs = new SubSink();

  constructor(private store: Store, private actions$: Actions) {
    this.subs.add(
        this.listenToPersonInfoForm(),
        this.listenToExperienceForm(),
        this.listenToEducationForm(),
        this.listenToSkillsForm(),
        this.listenToProjectsForm()
      );
  }

  ngOnInit(): void {
  }

  exportHtmlToPdf(){

  }

  listenToPersonInfoForm(){
    return this.actions$.pipe(ofActionSuccessful(UpdatePersonInfo)).subscribe(()=>{
      const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
      this.fullname = resumeDataState.personalInfoForm.controls["fullName"].value;
      this.email = resumeDataState.personalInfoForm.controls["email"].value;
      this.phone = resumeDataState.personalInfoForm.controls["phone"].value;
      this.cityAddress = resumeDataState.personalInfoForm.controls["cityAddress"].value;
      this.summary = resumeDataState.personalInfoForm.controls["summary"].value;
    });
  }

  listenToExperienceForm(){
    return this.actions$.pipe(ofActionSuccessful(UpdateExperienceForm)).subscribe(()=>{
      const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
      const workExperience = resumeDataState.experienceForm.get('workExperiences') as FormArray;
      this.workExperiences = [];
      this.getWorkExperience(workExperience);
    });
  }

  listenToEducationForm(){
    return this.actions$.pipe(ofActionSuccessful(UpdateEducationForm)).subscribe(()=> {
      const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
      const educations = resumeDataState.educationForm.get('educations') as FormArray;
      this.educations = [];
      this.getEducation(educations);
    });
  }

  listenToSkillsForm(){
    return this.actions$.pipe(ofActionSuccessful(AddSkills)).subscribe(()=> {
      const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
      const skills = resumeDataState.skillForm.get('skills') as FormArray;
      this.skills = [];
      this.getSkills(skills);
    });
  }

  listenToProjectsForm(){
    return this.actions$.pipe(ofActionSuccessful(UpdateProjectForm)).subscribe(()=> {
      const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
      const projects = resumeDataState.projectForm.get('projects') as FormArray;
      this.projects = [];
      this.getProjects(projects);
    });
  }

  private getEducation(educations: FormArray){
    for (const [index, control] of educations.controls.entries()) {
      const educationData = control.value;
      const end = educationData?.currentlyStudy ? "Present" : educationData?.startDate;
      const schoolDate = `${educationData?.endDate} - ${end}`;
  
      if(educationData?.school || educationData?.degree){
        this.educations.push(
          {
            school: educationData?.school,
            degree: educationData?.degree,
            schoolDate: schoolDate
          }
        )
      }
    }
  }

  private getWorkExperience(workExperience: FormArray){
    for (const [index, control] of workExperience.controls.entries()) {
      const experience = control.value;
      const end = experience?.currentWork ? "Present" : this.formatDate(experience.endDate);
      const workRange = `${this.formatDate(experience.startDate)} - ${end}`;
  
      if(experience?.company || experience?.position){
        this.workExperiences.push(
          {
            company: experience?.company,
            position: experience?.position,
            jobDate: workRange,
            summary: experience?.jobSummary
          }
        )
      }
    }
  }

  private getSkills(skills: FormArray){
    for (const [index, control] of skills.controls.entries()) {
      if(control.value){
        this.skills.push(control.value);
      }
    }
  }

  private getProjects(projects: FormArray){
    for (const [index, control] of projects.controls.entries()) {
      const project = control.value;

      if(project?.projectName || project?.description){
        this.projects.push(
          {
            projectName: project?.projectName,
            description: project?.description,
          }
        )
      }
    }
  }

  private formatDate(dateValue: any){
    if(!dateValue){
      return "";
    }

    return `${this.getMonthName(dateValue?.month)} ${dateValue?.year}`;
  }

  private getMonthName(monthNumber: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return monthNumber >= 1 && monthNumber <= 12 ? monthNames[monthNumber - 1] : '';
  }

}
