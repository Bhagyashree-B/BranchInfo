import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder,FormArray, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;
  isbn:string='';
  title:string='';
  description:string='';
  author:string='';
  publisher:string='';
  published_year:string='';
  boothName:string='';
  boothMoNumber:string='';
  boothNumber:string='';
  sadasyaName:string='';
  sadasyaMoNumber:string='';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'isbn' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publisher':[null, Validators.required],
      'published_year':[null, Validators.required],
      'companies': this.formBuilder.array([
        this.formBuilder.group({
        'boothName' : [null, Validators.required],
        'boothMoNumber':[null, Validators.required],
        'boothNumber':[null, Validators.required]
      })]),
      'sadasya' : this.formBuilder.array([
        this.formBuilder.group({
        'sadasyaName' : [null, Validators.required],
        'sadasyaMoNumber' : [null, Validators.required]
      })])
    });
  }

/////////////////////////////////

  get companies() {
    return this.bookForm.get('companies') as FormArray;
  }

  addNewCompany() {
    this.companies.push(this.formBuilder.group({ boothName: '',boothMoNumber : '',boothNumber : ''}));
  }

  deleteCompany(index) {
    this.companies.removeAt(index);
  }


/////////////////


get sadasya() {
  return this.bookForm.get('sadasya') as FormArray;
}

addNewSadasya() {
  this.sadasya.push(this.formBuilder.group({ sadasyaName: '',sadasyaMoNumber : ''}));
}

deleteSadasya(index) {
  this.sadasya.removeAt(index);
}

/////////////////

  onFormSubmit(form:NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
          this.router.navigate(['/books']);          
        }, (err) => {
          console.log(err);
        });
  }
}
