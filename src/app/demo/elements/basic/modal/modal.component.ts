import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "../../../../theme/shared/components";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  varyingModalContent = document.getElementById('varyingModalContent');

}
