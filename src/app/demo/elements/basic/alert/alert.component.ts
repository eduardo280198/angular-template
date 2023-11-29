import { Component } from '@angular/core';

import {RouterModule} from "@angular/router";
import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [RouterModule, CardModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

}
