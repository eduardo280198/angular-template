import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [CommonModule, NgbTooltip],
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {

}
