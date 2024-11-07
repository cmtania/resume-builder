export class UpdatePersonInfo {
    static readonly type = '[Resume] Update personal information';
    constructor(public payload: any) {}
  }

  export class UpdateExperienceForm {
    static readonly type = '[Resume] Update work experiences';
    constructor(public payload: any) {}
  }

  export class UpdateEducationForm {
    static readonly type = '[Resume] Update education';
    constructor(public payload: any) {}
  }