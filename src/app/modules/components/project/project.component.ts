import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { UpdateProjectForm } from '../../ngxs/resume.actions';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {

  @Input() projectsForm: any;

  constructor(private store: Store) {
  }
  
  ngOnInit(): void {
    if(this.projects.length === 0){
      this.addProject();
    }
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

    this.triggerUpdate();
  }

  removeProject(index: number): void {
    this.projects.removeAt(index);
    this.triggerUpdate();
  }

  triggerUpdate(){
    this.store.dispatch(new UpdateProjectForm(this.projectsForm));
  }

}
