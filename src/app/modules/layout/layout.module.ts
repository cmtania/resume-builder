import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "./layout-routing.module";
import { FormDataComponent } from "../components/form-data/form-data.component";
import { PdfViewerComponent } from "../components/pdf-viewer/pdf-viewer.component";
import { ResumeBuilderComponent } from "../components/resume-builder/resume-builder.component";
import { PersonalInfoComponent } from "../components/personal-info/personal-info.component";
import { WorkExperienceComponent } from "../components/work-experience/work-experience.component";
import { NgbCollapseModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from "@angular/forms";
import { EducationComponent } from "../components/education/education.component";
import { SkillComponent } from "../components/skill/skill.component";
import { ProjectComponent } from "../components/project/project.component";
import { NgxsModule } from "@ngxs/store";
import { ResumeDataState } from "../ngxs/resume.state";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgxsModule.forRoot([ResumeDataState])
  ],  
  declarations: [
    LayoutComponent,
    FormDataComponent,
    PdfViewerComponent,
    ResumeBuilderComponent,
    PersonalInfoComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent
  ],
  exports:[],  
  providers:[
   ]

})
export class LayoutModule { }
