import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

}
