import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoComponent } from './personal-info.component';
import { NgxsModule, Store } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeDataState } from '../../ngxs/resume.state';

fdescribe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalInfoComponent],
      providers: [Store],
      imports: [ReactiveFormsModule, NgxsModule.forRoot([ResumeDataState])],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Initialization", ()=> {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
   });

   describe("triggerUpdate", ()=> {
    it('should trigger', () => {
      // Arrange

      // Act
      component.triggerUpdate(null);
      // Assert
      expect(component).toBeTruthy();
    });
   });
});
