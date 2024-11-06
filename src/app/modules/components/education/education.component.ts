import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  @Input() educationForm: any;

  ngOnInit(): void {
    if(this.educations.length === 0){
      this.addEducation();
    }
   
    console.log("educationForm", this.educationForm);
  }

  get educations(): FormArray {
    return this.educationForm.get('educations') as FormArray;
  }

  addEducation(school: string = "", degree: string = "", startDate: string = "", endDate: string = "",  currentlyStudy: boolean = false): void {
    this.educations.push(
      new FormGroup({
          school: new FormControl(school),
          degree: new FormControl(degree),
          startDate: new FormControl(startDate),
          endDate: new FormControl(endDate),
          currentlyStudy: new FormControl(currentlyStudy)
      })
    );
  }

  removeEducation(index: number): void {
    this.educations.removeAt(index);
  }

}
