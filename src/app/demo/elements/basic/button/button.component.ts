import { Component } from '@angular/core';

import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CardModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

}
