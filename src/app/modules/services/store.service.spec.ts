import { TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';
import { NgxsModule, Store } from '@ngxs/store';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { PersonalInforDataModel } from '../models/PersonalInfoDataModel';
import { ResumeDataState } from '../ngxs/resume.state';
import {
  AddSkills,
  UpdateExperienceForm,
  UpdatePersonInfo,
  UpdateProjectForm,
} from '../ngxs/resume.actions';

fdescribe('StoreService', () => {
  let service: StoreService;
  let store: Store;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Store', ['selectSnapshot']);

    TestBed.configureTestingModule({
      providers: [StoreService, Store],
      imports: [NgxsModule.forRoot([ResumeDataState])],
    });

    service = TestBed.inject(StoreService);
    store = TestBed.inject(Store);
  });

  describe('Initialization', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getPersonalInfo', () => {
    it('should return personal information correctly', () => {
      // Arrange
      const mockForm = new FormGroup({
        fullName: new FormControl('John Doe'),
        email: new FormControl('john@example.com'),
        phone: new FormControl('123-456-7890'),
        cityAddress: new FormControl('123 Main St'),
        summary: new FormControl('A software developer.'),
      });

      store.dispatch(new UpdatePersonInfo(mockForm));

      // Act
      const result = service.getPersonalInfo();

      // Assert
      expect(result).toEqual(
        new PersonalInforDataModel(
          'John Doe',
          'john@example.com',
          '123-456-7890',
          '123 Main St',
          'A software developer.'
        )
      );
    });
  });
  describe('getWorkExperience', () => {
    it('should return work experiences correctly', () => {
      // Arrange
      const experienceData = new FormGroup({
        workExperiences: new FormArray([]),
      });

      store.dispatch(new UpdateExperienceForm(experienceData));

      // Act
      const result = service.getWorkExperience();

      // Assert
      expect(result).not.toBeNull();
    });
  });
  describe('getEducations', () => {
    it('should return educations correctly', () => {
      // Arrange
      const educations = new FormGroup({
        educations: new FormArray([]),
      });

      store.dispatch(new UpdateExperienceForm(educations));

      // Act
      const result = service.getEducations();

      // Assert
      expect(result).not.toBeNull();
    });
  });
  describe('getProjects', () => {
    it('should return projects correctly', () => {
      const projects = new FormGroup({
        projects: new FormArray([]),
      });

      store.dispatch(new UpdateProjectForm(projects));

      const result = service.getProjects();

      expect(result).not.toBeNull();
    });
  });
  describe('getSkills', () => {
    it('should return projects correctly', () => {
      const skills = new FormGroup({
        skills: new FormArray([]),
      });

      store.dispatch(new AddSkills(skills));

      const result = service.getSkills();

      expect(result).not.toBeNull();
    });
  });
});
