import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { UpdateExperienceForm } from '../../ngxs/resume.actions';

@Component({
  selector: 'app-work-experience',
  standalone: false,
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent implements OnInit {

  @Input() experienceForm:  any;
  
  constructor(private store: Store) {
  }
 
  ngOnInit(): void {
    if(this.workExperiences.length === 0){
      this.addWork();
    }
  }

  get workExperiences(): FormArray {
    return this.experienceForm.get('workExperiences') as FormArray;
  }

   addWork(): void {
    this.workExperiences.push(
      new FormGroup( {
          company: new FormControl(""),
          position: new FormControl(""),
          startDate: new FormControl(""),
          endDate: new FormControl(""),
          jobSummary: new FormControl(""),
          currentWork: new FormControl(false)
        }
      )
    );

    this.triggerUpdate();
  }

  removeWork(index: number): void {
    this.workExperiences.removeAt(index);
    this.store.dispatch(new UpdateExperienceForm(this.experienceForm));
  }

  triggerUpdate(){
    this.store.dispatch(new UpdateExperienceForm(this.experienceForm));
  }

  onDateSelect(){
    this.store.dispatch(new UpdateExperienceForm(this.experienceForm));
  }

  onCheckboxChange(){
    this.store.dispatch(new UpdateExperienceForm(this.experienceForm));
  }
}
