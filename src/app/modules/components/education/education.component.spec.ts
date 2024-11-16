import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxsModule, Store } from '@ngxs/store';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { executeSchedule } from 'rxjs/internal/util/executeSchedule';
import { ResumeDataInterfaceStateModel, ResumeDataState } from '../../ngxs/resume.state';

fdescribe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [Store],
      imports: [ReactiveFormsModule, NgxsModule.forRoot([ResumeDataState])],
    })
    .compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;

    component.educationForm = new FormGroup({
      educations: new FormArray([]),
    });

    fixture.detectChanges();
  });

   describe("Initialization", ()=> {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
   });

   describe("removeEducation", ()=> {
    it("should remove 1 item", ()=> {
      // Arrange
      spyOn(component, "triggerUpdate").and.returnValue();
      component.educations.push(
        new FormGroup({
            school: new FormControl("Test School2"),
            degree: new FormControl("BSTEST"),
            startDate: new FormControl("11/25/2025"),
            endDate: new FormControl("11/25/2026"),
            currentlyStudy: new FormControl(false)
        })
      );

      // Assert
      expect(component.educations.length).toEqual(2);
      
      // Act
      component.removeEducation(0);

      // Assert
      expect(component.educations.length).toEqual(1);
    })
   });

   describe("triggerUpdate", ()=> {
    it("should trigger", ()=> {
      // Arrange

      // Act
      component.triggerUpdate();
      const resumeDataState = store.selectSnapshot(x => x.resumeData) as ResumeDataInterfaceStateModel;
      const educations = resumeDataState.educationForm.get('educations') as FormArray;
      // Assert
      expect(educations.controls.entries()).toBeDefined();
    })
   });
});
