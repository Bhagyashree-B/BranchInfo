import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder,FormArray, FormGroup, NgForm, Validators } from '@angular/forms';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import {Inject} from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;
  shakhaKramank:string='';
  shakhaGaw:string='';
  shakhaPramukhMobile:string='';
  shakhaPramukhNaw:string='';
  shakhaUpPramukhNaw:string='';
  shakhaUpPramukhMobile:string='';
  boothName:string='';
  boothMoNumber:string='';
  boothNumber:string='';
  sadasyaName:string='';
  sadasyaMoNumber:string='';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      // 'shakhaKramank' : [null, Validators.required],
      'shakhaGaw' : [null, Validators.required],      
      'shakhaPramukhNaw' : [null, Validators.required],
      'shakhaPramukhMobile' : [null, Validators.required],
      'shakhaUpPramukhNaw':[null, Validators.required],
      'shakhaUpPramukhMobile':[null, Validators.required],
      'boothDetails': this.formBuilder.array([
        this.formBuilder.group({
        'boothName' : [null, Validators.required],
        'boothMoNumber':[null, Validators.required],
        'boothNumber':[null, Validators.required]
      })]),
      'sadasyaDetails' : this.formBuilder.array([
        this.formBuilder.group({
        'sadasyaName' : [null, Validators.required],
        'sadasyaMoNumber' : [null, Validators.required]
      })])
    });
  }

/////////////////////////////////

  get boothDetails() {
    return this.bookForm.get('boothDetails') as FormArray;
  }

  addNewCompany() {
    this.boothDetails.push(this.formBuilder.group({ boothName: '',boothMoNumber : '',boothNumber : ''}));
  }

  deleteCompany(index) {
    this.boothDetails.removeAt(index);
  }
/////////////////

get sadasyaDetails() {
  return this.bookForm.get('sadasyaDetails') as FormArray;
}

addNewSadasya() {
  this.sadasyaDetails.push(this.formBuilder.group({ sadasyaName: '',sadasyaMoNumber : ''}));
}

deleteSadasya(index) {
  this.sadasyaDetails.removeAt(index);
}

/////////////////

  onFormSubmit(form:NgForm) {
    this.api.postBook(form)
      .subscribe(res => {

        // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        //   width: '250px',
        //   data: {name: "this.name", animal: "this.animal"}
        // });
    
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.router.navigate(['/shakha-mahiti']); 
        // });  
        alert("Congratulations, data is added successfully...!");
        this.router.navigate(['/shakha-mahiti']);                  
        }, (err) => {
          console.log(err);
        });
  }
}

// export interface DialogData {
//   animal: string;
//   name: string;
// }


// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
