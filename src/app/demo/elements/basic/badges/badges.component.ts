import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {

}
