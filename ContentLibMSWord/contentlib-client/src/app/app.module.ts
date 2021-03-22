import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
