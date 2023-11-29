import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

}
