import { Component } from '@angular/core';

import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CardModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

}
