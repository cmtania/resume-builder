import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "./layout-routing.module";
import { FormDataComponent } from "../components/form-data/form-data.component";
import { PdfViewerComponent } from "../components/pdf-viewer/pdf-viewer.component";
import { ResumeBuilderComponent } from "../components/resume-builder/resume-builder.component";
import { PersonalInfoComponent } from "../components/personal-info/personal-info.component";
import { WorkExperienceComponent } from "../components/work-experience/work-experience.component";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbCollapseModule
  ],  
  declarations: [
    LayoutComponent,
    FormDataComponent,
    PdfViewerComponent,
    ResumeBuilderComponent,
    PersonalInfoComponent,
    WorkExperienceComponent
    
  ],
  exports:[],  
  providers:[
   ]

})
export class LayoutModule { }
