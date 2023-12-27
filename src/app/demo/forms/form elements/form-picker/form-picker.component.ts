import {Component, inject} from '@angular/core';
import {CardModule} from "../../../../theme/shared/components";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {NgbCalendar, NgbDate, NgbDatepicker, NgbDateStruct, NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {ColorPickerModule} from "ngx-color-picker";

@Component({
  selector: 'app-form-picker',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    JsonPipe,
    NgxMaterialTimepickerModule,
    NgbInputDatepicker,
    NgbDatepicker,
    ColorPickerModule
  ],
  templateUrl: './form-picker.component.html',
  styleUrl: './form-picker.component.scss'
})
export class FormPickerComponent {

  today = inject(NgbCalendar).getToday();

// SimplePopup
  modelSimplePopup: NgbDateStruct;

// Simple Inline
  modelSimpleInline: NgbDateStruct;
  dateSimpleInline: { year: number; month: number };

// Disabled
  private calendar : NgbCalendar = inject(NgbCalendar);
  modelDisabled: NgbDateStruct;
  disabled : boolean = true;

// Custom Day
  modelCustomDay : NgbDateStruct;
  isDisabled  = ( date: NgbDate, current: { month: number; year: number }) => date.month !== current.month;
  isWeekend   = ( date: NgbDate) => this.calendar.getWeekday(date) >= 6;
// ---------------------------------

// Range Selection
  calendarRangeSelection : NgbCalendar = inject(NgbCalendar);

  hoveredDate : NgbDate | null = null;
  fromDate: NgbDate = this.calendar.getToday();
  toDate: NgbDate | null = this.calendar.getNext(this.fromDate, 'd', 10);

  onDateSelection( date : NgbDate ) : void {
    if( !this.fromDate && !this.toDate ) {
      this.fromDate = date;
    } else if ( this.fromDate && !this.toDate && date.after(this.fromDate) ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered( date : NgbDate ) : boolean {
    return(
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date : NgbDate) : boolean {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange( date : NgbDate ) : boolean {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
        this.isInside(date) ||
        this.isHovered(date)
    );
  }
//----------------------------------------------

// Multiple Months
  displayMonths   : number  = 3;
  navigation      : string  = 'none';
  showWeekNumbers : boolean = false;
  outsideDays     : string  = 'visible';

// Color Picker
  toggle : boolean = false;
  colorBasic : string = '#2f6a87';
  colorShowColorCode : string = '#db968d';
  colorCodeFormatHsla : string = 'hsl(149,27%,65%)';
  colorCodeFormatRgba : string = 'rgb(221,14,190)';
  colorElementColor : string = '#523698';
  color : string = '#4099ff';
  colorRGBTransparent : string = 'rgb(148,175,174)';
  colorRGBATransparent : string = 'rgb(100,175,174)';
  colorHEXTransparent : string = '#a51ad633';
  colorInline : string = '#ffffff'
}
