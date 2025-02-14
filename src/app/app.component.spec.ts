import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges()
  });

  describe("Initialize", ()=> {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it(`should have the 'resume-builder' title`, () => {
      // Arrange
  
      // Assert
  
      // Act
      expect(component.title).toEqual('resume-builder');
    });
  });
});
