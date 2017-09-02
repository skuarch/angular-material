import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './modules/material/custom-material.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialTestComponent } from './components/material-test/material-test.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,    
    MaterialTestComponent, DialogContentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogContentComponent]
})
export class AppModule { }
