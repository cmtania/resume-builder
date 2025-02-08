import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddSkills } from '../../ngxs/resume.actions';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent implements OnInit {

  @Input() skillsForm: any;
  
  suggestedSkills = [
    "Javascript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "GIT",
    "Agile",
    "PHP",
    "Laravel",
    "Vue.js",
    "Angular",
    "AWS"
  ];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    console.log("skillsForm", this.skillsForm);
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
    this.triggerUpdate();
  }

  addSkill(skill: string): void {
      this.skills.push(new FormControl(skill));
      this.triggerUpdate();
  }

  triggerUpdate(){
    this.store.dispatch(new AddSkills(this.skillsForm));
  }

}
