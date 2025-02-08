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

  export class AddSkills {
    static readonly type = '[Resume] Add skills';
    constructor(public payload: any) {}
  }

  export class UpdateProjectForm {
    static readonly type = '[Resume] Update projects';
    constructor(public payload: any) {}
  }