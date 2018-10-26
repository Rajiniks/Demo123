import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormComponent } from "./form/form.component";
import { RouterModule, Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/form", pathMatch: "full" },
  { path: "form", component: FormComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
