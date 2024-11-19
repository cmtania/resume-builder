import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataComponent } from './form-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('FormDataComponent', () => {
  let component: FormDataComponent;
  let fixture: ComponentFixture<FormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDataComponent],
      imports:[ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Initialization", ()=> {
    it("should create", () => {
      expect(component).toBeTruthy();
    });
  });

  describe("displayForm",()=> {
    it("should set 1 for the active index", ()=> {
      // Arrange

      // Act
      component.displayForm(1);
      // Assert
      expect(component.activeIndex).toBe(1);
      expect(component.currentFormKey).toBe("personInfo");
    });
  });

  describe("getActiveForm",()=> {
    it("should return person info form", ()=> {
      // Arrange
      component.currentFormKey = "personInfo";
      // Act
      const activeForm = component.getActiveForm();
      // Assert
      expect(activeForm).toBe(component.personInfoForm);
    });

    it("should return experience form", ()=> {
      // Arrange
      component.currentFormKey = "experience";
      // Act
      const activeForm = component.getActiveForm();
      // Assert
      expect(activeForm).toBe(component.experienceForm);
    });

    it("should return education form", ()=> {
      // Arrange
      component.currentFormKey = "education";
      // Act
      const activeForm = component.getActiveForm();
      // Assert
      expect(activeForm).toBe(component.educationForm);
    });

    it("should return skills form", ()=> {
      // Arrange
      component.currentFormKey = "skills";
      // Act
      const activeForm = component.getActiveForm();
      // Assert
      expect(activeForm).toBe(component.skillsForm);
    });

    it("should return person info form", ()=> {
      // Arrange
      component.currentFormKey = "projects";
      // Act
      const activeForm = component.getActiveForm();
      // Assert
      expect(activeForm).toBe(component.projectsForm);
    });

    it("should return person info form as default", ()=> {
      // Arrange
      component.currentFormKey = "";
      // Act
      const activeForm = component.getActiveForm();
      // Assert
      expect(activeForm).toBe(component.personInfoForm);
    });
  });

});
