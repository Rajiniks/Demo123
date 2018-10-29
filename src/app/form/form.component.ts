import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  FormArray,
  Validators,
  FormGroup
} from "@angular/forms";
import { IMyOptions } from "mydatepicker";
import { MyDatePickerModule } from "mydatepicker";
import { Form, FinancialBenifit } from "../form";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  dform: FormGroup;
  errorText: string;

  constructor(private fb: FormBuilder) {}

  private myDatePickerOptions: IMyOptions = {
    dateFormat: "dd/mm/yyyy"
  };

  ngOnInit() {
    this.dform = this.fb.group({
      change_ref: ["", Validators.required],
      title: ["", Validators.required],
      change_own: ["", Validators.required],
      startdate: ["", Validators.required],
      enddate: ["", Validators.required],
      financial_benifits: this.fb.array([this.fb.group({ point: "" })])
    });
  }
  get FinancialBenifits() {
    return this.dform.get("financial_benifits") as FormArray;
  }
  addFinancialBenifit() {
    this.FinancialBenifits.push(this.fb.group({ point: "" }));
  }

  deleteFinancialBenifit(index) {
    this.FinancialBenifits.removeAt(index);
  }
  onSubmit() {
    console.log(this.dform.value);
  }
  goToCreate() {
    if (this.dform.untouched || this.dform.invalid) {
      this.errorText = "Please enter valid credentials";
    } else {
      this.errorText = "";
      alert("Successfully Created");
    }
  }
}
