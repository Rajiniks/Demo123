import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MyDatePickerModule } from "mydatepicker";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FormComponent } from "./form/form.component";
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [AppComponent, NavbarComponent, FormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MyDatePickerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
