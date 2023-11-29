import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "../../../theme/shared/components";

@Component({
  selector: 'app-form-advance',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './form-advance.component.html',
  styleUrls: ['./form-advance.component.scss']
})
export class FormAdvanceComponent {

}
