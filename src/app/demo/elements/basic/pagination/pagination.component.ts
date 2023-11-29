import { Component } from '@angular/core';

import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CardModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

}
