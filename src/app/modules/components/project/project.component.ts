import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  @Input() projectsForm: any;
  
  ngOnInit(): void {
    if(this.projects.length === 0){
      this.addProject();
    }
   
    console.log("projectForm", this.projectsForm);
  }

  get projects(): FormArray {
    return this.projectsForm.get('projects') as FormArray;
  }

   addProject(name: string = '', description: string = ''): void {
    this.projects.push(
      new FormGroup({
        projectName: new FormControl(name),
        description: new FormControl(description)
      })
    );
  }

  removeProject(index: number): void {
    this.projects.removeAt(index);
  }

}
