import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work-experience',
  standalone: false,
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent implements OnInit {

  @Input() experienceForm:  any;
  
  ngOnInit(): void {
    if(this.workExperiences.length === 0){
      this.addWork();
    }

    console.log("form", this.experienceForm);
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
  }

  removeWork(index: number): void {
    this.workExperiences.removeAt(index);
  }

}
