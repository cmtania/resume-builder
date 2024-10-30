import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path:"",
      component: LayoutComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LayoutRoutingModule { }
