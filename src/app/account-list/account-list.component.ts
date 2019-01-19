/**
 * @author: UPENDRA (uanthwal@gmail.com)
 * Component : Account List
 * Input: Account list to be displayed
 * Output: Event emitted to capture the selected accounts
 */

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

interface AccountListInterface {
    onClickSearch();
    onClickAccountInList(account: any);
    onClickSelectAllAccounts();
    onClickClearSearch();
}

@Component({
    selector: "account-list",
    templateUrl: "./account-list.component.html",
    styleUrls: ["./account-list.component.scss"]
})
export class AccountList implements OnInit, AccountListInterface {
    @Input() accountList: any;
    @Output() selectedAccountsEvent = new EventEmitter();
    selectedAccounts: any;
    searchText: any;
    objectKeys = Object.keys;
    constructor() { }

    ngOnInit(): void {
        this.selectedAccounts = {};
    }

    onClickSearch() {
        let text = event["target"]["value"];
        if (null != text && undefined != text) {
            text = text.trim();
            this.searchText = text;
        }
    }

    onClickAccountInList(acct) {
        this.checkUncheckAccount(acct);
        let accountClicked =
            acct.acctNo + "/" + acct.acctCcy + "/" + acct.acctProdCode;
        let keys = Object.keys(this.selectedAccounts);
        if (keys.indexOf(accountClicked) > -1) {
            delete this.selectedAccounts[accountClicked];
        } else {
            this.selectedAccounts[accountClicked] = this.prepareSelectAcctObject(
                acct
            );
        }
        this.selectedAccountsEvent.emit(this.selectedAccounts);
    }

    onClickSelectAllAccounts() {
        if (
            this.objectKeys(this.selectedAccounts).length ==
            this.objectKeys(this.accountList).length
        ) {
            // All the accounts are already selected in the list, clear them
            this.selectedAccounts = {};
            this.accountList.forEach((element, index) => {
                this.accountList[index]["selected"] = false;
            });
        } else {
            this.selectedAccounts = {};
            this.accountList.forEach((element, index) => {
                this.accountList[index]["selected"] = true;
                let accountClicked =
                    element.acctNo + "/" + element.acctCcy + "/" + element.acctProdCode;
                this.selectedAccounts[accountClicked] = this.prepareSelectAcctObject(
                    element
                );
            });
        }
        this.selectedAccountsEvent.emit(this.selectedAccounts);
    }

    onClickClearSearch() {
        this.searchText = "";
    }

    private prepareSelectAcctObject(account) {
        return {
            single: { selected: false, disabled: false },
            multiple: { selected: false, disabled: false },
            accountInfo: account
        };
    }

    private checkUncheckAccount(acct) {
        this.accountList.forEach((element, index) => {
            if (JSON.stringify(element) == JSON.stringify(acct)) {
                this.accountList[index]["selected"] = !this.accountList[index][
                    "selected"
                ];
            }
        });
    }
}
