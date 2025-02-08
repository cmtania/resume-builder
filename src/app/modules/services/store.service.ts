import { Injectable } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ResumeDataInterfaceStateModel } from '../ngxs/resume.state';
import { PersonalInforDataModel } from '../models/PersonalInfoDataModel';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store) {}

  getPersonalInfo(): PersonalInforDataModel {
    const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
    const fullname = resumeDataState.personalInfoForm.controls["fullName"].value;
    const email = resumeDataState.personalInfoForm.controls["email"].value;
    const phone = resumeDataState.personalInfoForm.controls["phone"].value;
    const cityAddress = resumeDataState.personalInfoForm.controls["cityAddress"].value;
    const summary = resumeDataState.personalInfoForm.controls["summary"].value;

    return new PersonalInforDataModel(fullname, email, phone, cityAddress, summary);
  }

  getWorkExperience(){
    const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;

    return resumeDataState.experienceForm.get('workExperiences') as FormArray;
  }

  getEducations(){
    const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
    
    return resumeDataState.educationForm.get('educations') as FormArray;
  }

  getProjects(){
    const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
    
    return resumeDataState.projectForm.get('projects') as FormArray;
  }

  getSkills(){
    const resumeDataState = this.store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
    
    return resumeDataState.skillForm.get('skills') as FormArray;
  }
}
