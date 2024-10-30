import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: false,
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent implements OnInit {

  @Input() experienceForm:  any;
  
  ngOnInit(): void {
    console.log("form", this.experienceForm);
  }

}
