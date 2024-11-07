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

  years: Array<number> = [];

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

  triggerUpdate(){
    this.store.dispatch(new UpdateEducationForm(this.educationForm));
  }

  onDateSelect(){
    this.store.dispatch(new UpdateEducationForm(this.educationForm));
  }

  onCheckboxChange(){
    this.store.dispatch(new UpdateEducationForm(this.educationForm));
  }

  onYearSelect(){
    this.store.dispatch(new UpdateEducationForm(this.educationForm));
  }

  private generateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 40; 
    for (let year = currentYear; year >= startYear; year--) {
      this.years.push(year);
    }
  }

}
