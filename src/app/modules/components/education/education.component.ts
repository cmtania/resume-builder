import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { UpdateEducationForm } from '../../ngxs/resume.actions';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  @Input() educationForm: any;

  constructor(private store: Store) {
    this.generateYears();
  }

  startYears: Array<number> = [];
  endYears: Array<number> = [];

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
    this.triggerUpdate();
  }

  triggerUpdate(): void {
    this.store.dispatch(new UpdateEducationForm(this.educationForm));
  }

  removePastYears(index: number): void {
    this.generateYears();
    const startDateValue = this.educationForm.get('educations').at(index).get('startDate')?.value;
    const selectedStartYear = parseInt(startDateValue);
    const startYearIndex =  this.startYears.findIndex(year => year === selectedStartYear);
    if (startYearIndex > -1) {
      this.endYears = this.endYears.slice(0, startYearIndex);
    }
  }

  private generateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 40;
    this.startYears = [];
    this.endYears = []; 
    for (let year = currentYear; year >= startYear; year--) {
      this.startYears.push(year);
      this.endYears.push(year);
    }
  }

}
