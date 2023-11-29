import { Component } from '@angular/core';

import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-tabs-pills',
  standalone: true,
  imports: [CardModule],
  templateUrl: './tabs-pills.component.html',
  styleUrls: ['./tabs-pills.component.scss']
})
export class TabsPillsComponent {

}
