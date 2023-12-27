import {Component, OnInit} from '@angular/core';
import {CardModule} from "../../../../theme/shared/components";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {JsonPipe} from "@angular/common";

// Validador personalizado para verificar caracteres especiales.
function noSpecialCharacter ( control : AbstractControl) : {} | null {

  const specialCharacter      : RegExp = /[!@#$%^&*(),.?":{}|<>]/;
  const haveSpecialCharacter  : boolean = specialCharacter.test(control.value);

  return haveSpecialCharacter ? { specialCharacter : true } : null;
}

@Component({
  selector: 'app-basic-form-layout',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    JsonPipe
  ],
  templateUrl: './basic-form-layout.component.html',
  styleUrl: './basic-form-layout.component.scss'
})
export class BasicFormLayoutComponent implements OnInit{

  // Simple Form Layout
  public formSimpleLayout : FormGroup;
  nameSimpleFormControl     : FormControl<String>;
  emailSimpleFormControl    : FormControl<String>;
  phoneSimpleFormControl    : FormControl<String>;
  passwordSimpleFormControl : FormControl<String>;

  // Horizontal Form Layout
  public formHorizontalLayout : FormGroup;
  nameHorizontalFormControl         : FormControl<String>;
  emailHorizontalFormControl        : FormControl<String>;
  degreeNameHorizontalFormControl   : FormControl<String>;
  passingYearHorizontalFormControl  : FormControl<String>;
  languageHorizontalFormControl     : FormControl<String[]>;

  // Form Grid Layout
  public formGridLayout : FormGroup;
  firstNameFormGridControl    : FormControl<String>;
  lastNameFormGridControl     : FormControl<String>;
  companyNameFormGridControl  : FormControl<String>;
  phoneNumberFormGridControl  : FormControl<String>;
  emailAddressFormGridControl : FormControl<String>;
  addressFormGridControl      : FormControl<String>;
  cityFormGridControl         : FormControl<String>;
  stateFormGridControl        : FormControl<String>;

  constructor( private fb : FormBuilder ) {}

  ngOnInit() : void {

    // Simple Form Layout
    this.initSimpleLayout();

    // Horizontal Form Layout
    this.initHorizontalLayout();

    // Form Grid Layout
    this.initFormGridLayout();
  }

  // Simple Form Layout
  initSimpleLayout () : void {
    // Cuenta con la opcion de que no puede ser null y tambien tiene validadores
    // Inicializacion del 'nameSimpleFormControl', con su valor inicial y validaciones
    this.nameSimpleFormControl = new FormControl<String>('', {
      nonNullable : true,
      validators : [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        noSpecialCharacter, // Validador personalizado.
      ],
    });

    // Inicializacion del 'emailSimpleFormControl', con su valor inicial y validaciones
    this.emailSimpleFormControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ]
    });

    // Inicializacion del 'phoneSimpleFormControl', con su valor inicial y validaciones
    this.phoneSimpleFormControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.pattern('[0-9]{10}'), // Validacion de que debe tener 10 digitos y que deben ser numeros.
        Validators.min(1000000000), // Validacion de Minimo de 10 digitos
        Validators.max(9999999999), // Validacion de Maximo de 10 digitos
      ],
    });

    // Inicializacion del 'passwordSimpleFormControl', con su valor inicial y validaciones
    this.passwordSimpleFormControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.minLength(5),
      ],
    });

    // Usar la propiedad nonNullable en el formGroup, permite que los Controls internos no acepten valores Null, para evitar la repeticion
    // de la opcion de (nonNullable : true) en cada Control.
    this.formSimpleLayout = this.fb.nonNullable.group({
      name          : this.nameSimpleFormControl,
      email         : this.emailSimpleFormControl,
      phone         : this.phoneSimpleFormControl,
      password      : this.passwordSimpleFormControl,
    })
  }

  // Horizontal Form Layout
  initHorizontalLayout () : void {

    // Inicializacion del 'nameHorizontalFormControl', con su valor inicial y validaciones
    this.nameHorizontalFormControl = new FormControl<String>( '', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        noSpecialCharacter,
      ]
    });

    // Inicializacion del 'emailHorizontalFormControl', con su valor inicial y validaciones
    this.emailHorizontalFormControl = new FormControl<String>( '', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ]
    });

    // Inicializacion del 'degreeNameHorizontalFormControl', con su valor inicial y validaciones
    this.degreeNameHorizontalFormControl = new FormControl<String>( '', {
      nonNullable : true,
      validators  : [
        Validators.required,
      ]
    })

    // Inicializacion del 'passingYearHorizontalFormControl', con su valor inicial y validaciones
    this.passingYearHorizontalFormControl = new FormControl<String>( '', {
      nonNullable : true,
      validators  : [
        Validators.required,
      ]
    })

    // Inicializacion del 'languageHorizontalFormControl', con su valor inicial y validaciones
    this.languageHorizontalFormControl = new FormControl<String[]>( [], {
      nonNullable : true,
      validators  : [
        Validators.required,
      ]
    })

    this.formHorizontalLayout = this.fb.group({
      name        : this.nameHorizontalFormControl,
      email       : this.emailHorizontalFormControl,
      degreeName  : this.degreeNameHorizontalFormControl,
      passingYear : this.passingYearHorizontalFormControl,
      language    : this.languageHorizontalFormControl,
    });
  }

  initFormGridLayout () : void {

    // Inicializacion del 'firstNameFormGridControl', con su valor inicial y validaciones
    this.firstNameFormGridControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        noSpecialCharacter,
      ]
    });

    // Inicializacion del 'lastNameFormGridControl', con su valor inicial y validaciones
    this.lastNameFormGridControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        noSpecialCharacter,
      ],
    });

    // Inicializacion del 'companyNameFormGridControl', con su valor inicial y validaciones
    this.companyNameFormGridControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
        noSpecialCharacter,
      ]
    });

    // Inicializacion del 'phoneNumberFormGridControl', con su valor inicial y validaciones
    this.phoneNumberFormGridControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.pattern('[0-9]{10}'), // Validacion de que debe tener 10 digitos y que deben ser numeros.
        Validators.min(1000000000), // Validacion de Minimo de 10 digitos
        Validators.max(9999999999), // Validacion de Maximo de 10 digitos
      ]
    });

    // Inicializacion del 'emailAddressFormGridControl', con su valor inicial y validaciones
    this.emailAddressFormGridControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ],
    });

    // Inicializacion del 'addressFormGridControl', con su valor inicial y validaciones
    this.addressFormGridControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.maxLength(80),
      ],
    });

    // Inicializacion del 'cityFormGridControl', con su valor inicial y validaciones
    this.cityFormGridControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required,
        Validators.maxLength(40),
        noSpecialCharacter,
      ],
    });

    // Inicializacion del 'stateFormGridControl', con su valor inicial y validaciones
    this.stateFormGridControl = new FormControl<String>('', {
      nonNullable : true,
      validators  : [
        Validators.required
      ],
    });

    this.formGridLayout = this.fb.group({
      firstName     : this.firstNameFormGridControl,
      lastName      : this.lastNameFormGridControl,
      companyName   : this.companyNameFormGridControl,
      phoneNumber   : this.phoneNumberFormGridControl,
      emailAddress  : this.emailAddressFormGridControl,
      address       : this.addressFormGridControl,
      city          : this.cityFormGridControl,
      state         : this.stateFormGridControl,
    });
  }

  // NT: existe el formRecord el cual te permite agregar de forma dinamica mas formControl y se puede usar como el formBuilder.
  // TODO: Usar el form record en algun formulario de la plantilla. :)

  // Vacia los formularios reactivos.
  clearForm ( resetForm : FormGroup ) : void {
    resetForm.reset();
  }
}
