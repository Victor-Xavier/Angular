import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuspenseComponent } from './page/suspense/suspense.component';
import { TerrorComponent } from './page/terror/terror.component';
import { AventuraComponent } from './page/aventura/aventura.component';

const routes: Routes = [
  {path:'suspense', component:SuspenseComponent},
  {path:'terror', component:TerrorComponent},
  {path:'aventura', component:AventuraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
