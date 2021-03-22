import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentlibDetailsComponent } from './componentlib-details/componentlib-details.component';
import { CreateComponentlibComponent } from './create-componentlib/create-componentlib.component';
import { ComponentlibListComponent } from './componentlib-list/componentlib-list.component';
import { UpdateComponentlibComponent } from './update-componentlib/update-componentlib.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
