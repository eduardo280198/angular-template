import { Component } from '@angular/core';
import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-wizard-form-layout',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './wizard-form-layout.component.html',
  styleUrl: './wizard-form-layout.component.scss'
})
export class WizardFormLayoutComponent {

}
