import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "../../../theme/shared/components";

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent {

}
