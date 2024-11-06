import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumeDataInterfaceStateModel, ResumeDataState } from '../../ngxs/resume.state';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { FormArray, FormGroup } from '@angular/forms';
import { UpdateExperienceForm, UpdatePersonInfo } from '../../ngxs/resume.actions';
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

  private subs = new SubSink();

  constructor(private store: Store, private actions$: Actions) {
    this.subs.add(this.listenToPersonInfoForm(),
    this.listenToExperienceForm());
  }

  ngOnInit(): void {
  }

  exportHtmlToPdf(){

  }

  listenToPersonInfoForm(){
    return this.actions$.pipe(ofActionSuccessful(UpdatePersonInfo)).subscribe(()=>{
      const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
      console.log("listenToPersonInfoForm", resumeDataState);
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
      console.log("listenToExperienceForm", resumeDataState);
      const workExperience = resumeDataState.experienceForm.get('workExperiences') as FormArray;
      console.log("workExperience", workExperience);
      this.workExperiences = [];
     this.getWorkExperience(workExperience);
    });
  }

  private getWorkExperience(workExperience: FormArray){

    for (const [index, control] of workExperience.controls.entries()) {
      console.log(`Item ${index + 1}:`, control.value);
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

  private formatDate(dateValue: any){
      return `${this.getMonthName(dateValue?.month)} ${dateValue?.year}`;
  }

  private getMonthName(monthNumber: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return monthNumber >= 1 && monthNumber <= 12 ? monthNames[monthNumber - 1] : 'Invalid month';
  }

}
