import { Component } from '@angular/core';

import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CardModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  varyingModalContent = document.getElementById('varyingModalContent');

}
