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
      companies: this.formBuilder.array([{
        'boothName' : [null, Validators.required],
        'boothMoNumber':[null, Validators.required],
        'boothNumber':[null, Validators.required]
      }]),
      sadasya : this.formBuilder.array([{
        'sadasyaName' : [null, Validators.required],
        'sadasyaMoNumber' : [null, Validators.required]
      }])
    });
  }

/////////////////////////////////

data = {
  company: [
    {
      boothName: "example comany",
      boothMoNumber : "asda",
      boothNumber : "asdsd"
    }],
  sadasya : [{
    sadasyaName : "",
    sadasyaMoNumber : ""
  }]
}
  addNewCompany() {
    let control = <FormArray>this.bookForm.controls.companies;
    control.push(
      this.formBuilder.group({
        company: [{
           boothName: "example comany",
           boothMoNumber : "",
           boothNumber : ""
        }]
      })
    )
  }

  deleteCompany(index) {
    let control = <FormArray>this.bookForm.controls.companies;
    control.removeAt(index)
  }


  setCompanies() {
    let control = <FormArray>this.bookForm.controls.companies;
    this.data.company.forEach(x => {
      control.push(this.formBuilder.group({ 
        boothName: x.boothName,
        boothMoNumber : x.boothMoNumber,
        boothNumber : x.boothNumber }))
    })
  }

/////////////////

addNewSadasya() {
  let control = <FormArray>this.bookForm.controls.sadasya;
  control.push(
    this.formBuilder.group({
      sadasya: [{
        sadasyaName : '',
        sadasyaMoNumber : ''
      }]
    })
  )
}

deleteSadasya(index) {
  let control = <FormArray>this.bookForm.controls.sadasya;
  control.removeAt(index)
}

setSadasya() {
  let control = <FormArray>this.bookForm.controls.sadasya;
  this.data.sadasya.forEach(x => {
    control.push(this.formBuilder.group({ 
      sadasyaName : x.sadasyaName,
      sadasyaMoNumber : x.sadasyaMoNumber }))
  })
}


/////////////////

  onFormSubmit(form:NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
