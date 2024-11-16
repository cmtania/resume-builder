import { Injectable } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor(private store: Store) {}

  triggerUpdate(action: any, formData: any): void {
    if (action && formData) {
      this.store.dispatch(new action(formData));
    }
  }

    getFormArray(form: FormGroup, arrayName: string): FormArray {
      return form.get(arrayName) as FormArray;
    }
  
    addFormArrayItem(form: FormGroup, arrayName: string, item: FormGroup): void {
      this.getFormArray(form, arrayName).push(item);
    }
  
    removeFormArrayItem(form: FormGroup, arrayName: string, index: number): void {
      this.getFormArray(form, arrayName).removeAt(index);
    }
}
