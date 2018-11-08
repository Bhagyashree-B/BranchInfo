import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  displayedColumns = ['शाखा क़मांक', 'शाखा गाव', 'शाखा प्रमुख नाव','शाखा प्रमुख मोबाईल क़मांक', 'companies','sadasya'];
  dataSource = new BookDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
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

  convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
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
              result += item[key];
              ctr++;
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
