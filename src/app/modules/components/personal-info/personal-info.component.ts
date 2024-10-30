import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: false,
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent implements OnInit {

  @Input() personInfoForm: any;

  ngOnInit(): void {
    console.log("form", this.personInfoForm);
  }
}
