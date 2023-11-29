import {Route} from "@angular/router";

export const FORMS_ROUTES : Route[] = [

  {
    path: 'basic',
    loadComponent: () => import('./form-basic/form-basic.component').then( m => m.FormBasicComponent),
  },
  {
    path: 'advance',
    loadComponent: () => import('./form-advance/form-advance.component').then( m => m.FormAdvanceComponent),
  },
  {
    path: 'validation',
    loadComponent: () => import('./form-validation/form-validation.component').then( m => m.FormValidationComponent)
  }

]
