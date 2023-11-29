import { Component } from '@angular/core';

import {CardModule} from "../../../theme/shared/components";

@Component({
  selector: 'app-form-basic',
  standalone: true,
  imports: [CardModule],
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.scss']
})
export class FormBasicComponent {

  protected readonly oninvalid = oninvalid;
}
