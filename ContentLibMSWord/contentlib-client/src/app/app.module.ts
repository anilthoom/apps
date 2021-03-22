import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponentlibComponent } from './create-componentlib/create-componentlib.component';
import { ComponentlibDetailsComponent } from './componentlib-details/componentlib-details.component';
import { ComponentlibListComponent } from './componentlib-list/componentlib-list.component';
import { UpdateComponentlibComponent } from './update-componentlib/update-componentlib.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponentlibComponent,
    ComponentlibDetailsComponent,
    ComponentlibListComponent,
    UpdateComponentlibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
