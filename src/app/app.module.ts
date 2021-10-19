import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PillowCaseComponent } from './pillow-case/pillow-case.component';
import { CandyStoreComponent } from './candy-store/candy-store.component';

@NgModule({
  declarations: [
    AppComponent,
    PillowCaseComponent,
    CandyStoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
