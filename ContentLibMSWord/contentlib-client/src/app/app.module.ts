import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponentlibComponent } from './create-componentlib/create-componentlib.component';
import { ComponentlibDetailsComponent } from './componentlib-details/componentlib-details.component';
import { ComponentlibListComponent } from './componentlib-list/componentlib-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponentlibComponent,
    ComponentlibDetailsComponent,
    ComponentlibListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
