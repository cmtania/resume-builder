import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UpdateEducationForm, UpdateExperienceForm, UpdatePersonInfo } from './resume.actions';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface ResumeDataInterfaceStateModel {
    personalInfoForm: any;
    experienceForm: any;
    educationForm: any;
    skillForm: any;
    projectForm: any;

  }
@State<ResumeDataInterfaceStateModel>({
  name: 'resumeData',
  defaults: {
    personalInfoForm: new FormGroup({
        fullName: new FormControl(""),
        email: new FormControl(""),
        phone: new FormControl(""),
        cityAddress: new FormControl(""),
        summary: new FormControl(""),
      }),
    experienceForm: new FormGroup({
        workExperiences: new FormArray([])
      }),
    educationForm: new FormGroup({
        educations: new FormArray([])
      }),
    skillForm: new FormGroup({
        skills: new FormArray([])
      }),
    projectForm: new FormGroup({
        projects: new FormArray([])
      })
  }
})
@Injectable()
export class ResumeDataState {

@Selector()
  static getPersonalInfo(state: ResumeDataInterfaceStateModel): FormGroup {
    return state.personalInfoForm;
  }

  @Action(UpdatePersonInfo)
  updatePersonInfo(ctx: StateContext<ResumeDataInterfaceStateModel>, action: UpdatePersonInfo) {
    console.log("update", action.payload);
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      personalInfoForm: action.payload
    });
  }

  @Action(UpdateExperienceForm)
  updateExperienceForm(ctx: StateContext<ResumeDataInterfaceStateModel>, action: UpdateExperienceForm) {
    console.log("UpdateExperienceForm", action.payload);
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      experienceForm: action.payload
    });
  }

  @Action(UpdateEducationForm)
  updateEducationForm(ctx: StateContext<ResumeDataInterfaceStateModel>, action: UpdateEducationForm) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      educationForm: action.payload
    });
  }
}