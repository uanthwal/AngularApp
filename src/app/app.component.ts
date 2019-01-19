import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular App';
  accountList : any;
  constructor() { }
  ngOnInit(): void {
    this.accountList = [
      {
        acctNo: 1234556,
        acctCcy: "USD",
        acctProdCode: "FOH",
        acctName: "ABC",
        selected: false
      },
      {
        acctNo: 987654,
        acctCcy: "USD",
        acctProdCode: "FON",
        acctName: "GASDJK",
        selected: false
      },
      {
        acctNo: 45612,
        acctCcy: "GBR",
        acctProdCode: "CLODA",
        acctName: "UAOI",
        selected: false
      },
      {
        acctNo: 879456,
        acctCcy: "HKD",
        acctProdCode: "CBSG",
        acctName: "BLJBA",
        selected: false
      },
      {
        acctNo: 156156,
        acctCcy: "SGD",
        acctProdCode: "FOH",
        acctName: "TQWEU",
        selected: false
      }
    ];
  }

  onClickAccountInList(data) {
    console.log("Data selected in the Child Component : ", data);
  }
}
