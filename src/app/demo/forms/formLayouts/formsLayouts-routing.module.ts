import {Route} from "@angular/router";

export const FORMS_LAYOUTS_ROUTES : Route[] = [

  {
    path: 'layout',
    loadComponent: () => import('./basic-form-layout/basic-form-layout.component').then( m => m.BasicFormLayoutComponent ),
  },
  {
    path: 'wizard',
    loadComponent: () => import('./wizard-form-layout/wizard-form-layout.component').then( m => m.WizardFormLayoutComponent ),
  }
]
