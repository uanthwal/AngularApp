import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AccountList } from "./account-list/account-list.component";
import { AccountListFilter } from "./account-list/account-list-filter";

@NgModule({
  declarations: [AppComponent, AccountList, AccountListFilter],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
