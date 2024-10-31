import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  @Input() educationForm: any;

  ngOnInit(): void {
    console.log("education", this.educationForm);
  }

}
