import { Component } from '@angular/core';

import {CardModule} from "../../../../theme/shared/components";
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CardModule, NgbDropdown],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

}
