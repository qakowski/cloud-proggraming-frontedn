import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingFormComponent } from './components/building-form/building-form.component';


const routes: Routes = [
  {path: '', component: BuildingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
