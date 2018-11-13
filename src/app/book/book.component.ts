import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import {  FormGroup,FormBuilder,Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  csvForm: FormGroup;
  token :string='';
  currentState:string = '1';

  books: any;
  displayedColumns = ['शाखा क़मांक', 'शाखा गाव', 'शाखा प्रमुख नाव','शाखा प्रमुख मोबाईल क़मांक', 'companies','sadasya'];
  dataSource = new BookDataSource(this.api);

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.csvForm = this.formBuilder.group({
      'token' : [null, Validators.required]         
    })

    this.api.getBooks()
      .subscribe(res => {       
        this.books = res;
        this.books.forEach(book => {
          console.log(book)
        });
      }, err => {
        console.log(err);
      });
  }  

  onFormSubmit(form:NgForm) {
     var token = this.csvForm.get('token').value
    if(token == 'shakha@123')
    {
      this.currentState = '2'
    }else{
      this.currentState = '1'
    }    
  }

  ////////////////////////////////////////////////////////////////////////////

  convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data, filteredKeys;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    filteredKeys = [keys[1],keys[2],keys[3],keys[4],keys[5],keys[6],keys[7]];

    result = '';
    result += filteredKeys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        filteredKeys.forEach(function(key) {
            if (ctr > 0) 
            result += columnDelimiter;               
                
              var parse_json =typeof item[key] === 'object'
              
              if(parse_json == true && key == 'boothDetails')
              {
               item[key].forEach(function(subItem){ 
                  result += " बूथ नाव :  " + subItem.boothName + " " + " बूथ मोबाईल क़मांक : " + subItem.boothMoNumber + " बूथ क़मांक :  " + subItem.boothNumber + " ";
               });
               
              }else if(parse_json == true && key == 'sadasyaDetails'){
               item[key].forEach(function(subItem){
                  result += " सदस्य नाव :  " + subItem.sadasyaName + " " + " सदस्य मोबाईल क़मांक : " + subItem.sadasyaMoNumber + " ";
               });               
              }else{
                //Ignore record ids and updated time
               if(key != "_id" || key != "shakhaKramank" || key != "updated_date" || key != "__v"  ) 
               {
               result += item[key];
               ctr++;
              }
            }           
        });
        result += lineDelimiter;
    });
    return result;    
}

downloadCSV() {
    var data, filename, link;

    var csv = this.convertArrayOfObjectsToCSV({
        data: this.books
    });
    if (csv == null) return;

    filename = 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }
}

export class BookDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getBooks();
  }

  disconnect() {

  }
}
