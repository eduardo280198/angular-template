import {Component, OnInit} from '@angular/core';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CardModule} from "../../../../theme/shared/components";
import {map, Observable} from "rxjs";
import {DataService, Person, Photos} from "./data.service";
import {AsyncPipe, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TagInputModule} from "ngx-chips";
import {TagModel} from "ngx-chips/core/tag-model";

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    AsyncPipe,
    NgOptimizedImage,
    UpperCasePipe,
    TagInputModule
  ],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.scss'
})
export class FormSelectComponent implements OnInit{

  // Multi Select
  people$ : Observable<Person[]>;
  selectedPeople = [{name: 'Karyn Wright'}];

  // Custom Selected Item Label
  githubUsers$ : Observable<any[]>;
  selectedUsers : string[] = ['anjmao'];

  // Multi Select With Checkboxes
  people : Person[] = [];
  selectedPeopleCheckboxes  = [];

  // Limiting the number of selections
  peopleLimitingNumberSelections$ : Observable<Person[]>;
  selectedPeopleLimitingNumberSelections : {}[] = [];

  // Single select with required validation
  heroForm : FormGroup;
  ages : any[] = [
    { value : '<18',  label : 'Under 18' },
    { value : '18',   label : '18' },
    { value : '>18',  label : 'More than 18' }
  ];

  // Reactive Forms with custom template
  heroFormReactive : FormGroup;
  photos : Photos[] = [];

  // Default Tag Select
  // ngx-chip
  tagsArray  = [
    {id : 1, display : 'Item 1', value : 'Item 1', readonly: true },
    {id : 2, display : 'Item 2', value : 'Item 2' },
    {id : 3, display : 'Item 3', value : 'Item 3' },
    {id : 4, display : 'Item 4', value : 'Item 4' },
    {id : 5, display : 'Item 5', value : 'Item 5' },
    {id : 6, display : 'Item 6', value : 'Item 6' },
    {id : 7, display : 'Item 7', value : 'Item 7' },
    {id : 8, display : 'Item 8', value : 'Item 8' },
    {id : 9, display : 'Item 9', value : 'Item 9' },
  ];

  option = {
    secondaryPlaceholder  : 'Enter a new tag',
    placeholder           : '+',
  }

  constructor(
    private dataService : DataService,
    private fb : FormBuilder,
    private modalService : NgbModal
  ) {}

  ngOnInit() : void {
    // People - Multi Select
    this.people$ = this.dataService.getPeople();

    // GithubUsers - Custom Selected Item Label
    this.githubUsers$ = this.dataService.getGithubAccounts('anjm');

    // Multi Select With Checkboxes
    this.dataService.getPeople()
      .pipe(map(x => x.filter (y => !y.disabled)))
      .subscribe((res : Person[]) => {
        this.people = res;
        this.selectedPeopleCheckboxes = [this.people[0].id, this.people[1].id];
      });

    //  Limiting the number of selections
    this.peopleLimitingNumberSelections$ = this.dataService.getPeople();

    // Single select with required validation
    this.heroForm = this.fb.group({
      age : [null, Validators.required]
    })

    // Reactive Forms with custom template
    this.heroFormReactive = this.fb.group({
      photo: ['']
    });

    this.loadPhotos();

  }

  // Single select with required validation
  toggleAgeDisabled() : void {
    if (this.heroForm.value.age.disabled) {
      this.heroForm.value.age.enabled();
    } else {
      this.heroForm.value.age.disabled();
    }
  }
  showConfirm(content) : void {
    this.modalService.open(content);
  }

  // Reactive Forms with custom template
  selectFirstPhoto() : void {
    this.heroFormReactive.get('photo').patchValue(this.photos[0].thumbnailUrl);
  }

  openModal( content ) : void {
    this.modalService.open(content);
  }

  changePhoto( photo ) : void {
    this.heroFormReactive.get('photo').patchValue(photo ? photo.thumbnailUrl : null);
  }

  togglePhotoDisabled() : void {
    const photo = this.heroFormReactive.get('photo');
    if(photo.disabled) {
      photo.enable();
    } else {
      photo.disable();
    }
  }

  private loadPhotos() : void {
    this.dataService.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.selectFirstPhoto();
    });
  }
}
