// Dependencias
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import {IConfig} from "ngx-mask";

import { Component } from '@angular/core';
import {CardModule} from "../../../../theme/shared/components";

// Configuracion del mask.
const maskConfig : Partial<IConfig> = {

}

@Component({
  selector: 'app-form-masking',
  standalone: true,
  templateUrl: './form-masking.component.html',
  styleUrls: ['./form-masking.component.scss'],
  imports: [NgxMaskDirective, CardModule,],
  providers: [provideNgxMask(maskConfig),]
})
export class FormMaskingComponent {

}
