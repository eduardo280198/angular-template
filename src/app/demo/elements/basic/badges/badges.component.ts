import { Component } from '@angular/core';

import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CardModule],
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {

}
