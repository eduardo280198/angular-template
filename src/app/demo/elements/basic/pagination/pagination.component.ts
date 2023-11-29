import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

}
