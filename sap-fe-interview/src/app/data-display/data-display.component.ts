import { Component, OnInit } from '@angular/core';
import JsonData from '../../../src/assets/books.json';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.less']
})
export class DataDisplayComponent implements OnInit {

  //columns
  columnDefs = [
    
    { headerName: 'Image', field: 'image', editable: true, autoHeight: true,
     cellRenderer: function(params) {
        //since image
          return '<img src=' + params.value + '>'
     } },
     { headerName: "Title (Click to Sort)", field: "title", sortable: true},
     { headerName: "Id", field: "id" },
     { headerName: "Author", field: "author" },
     { headerName: "Category", field: "category" },
     { headerName: "Votes (Click to Sort)", field: "votes", sortable: true },
    {
      headerName: "Url", field: "url",
      cellRenderer: function(params){
        return "<a href=" 
          + params.value 
          + ">"+params.value+"</a>";
      }
    }

      ];
   
  //rows
  rowData = []

  constructor() {}

  ngOnInit(): void {
    //appending data from books.json to rowData array
    for(let i = 0;i<JsonData.length;i++){
      this.rowData.push(JsonData[i])
    }
  }

}
