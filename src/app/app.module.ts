import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UtilService } from '../services/util.service';
import { MathUtilsComponent } from '../components/math-utils/math-utils.component'
import { StringUtilsComponent } from '../components/string-utils/string-utils.component'

@NgModule({
  declarations: [
    AppComponent,
    MathUtilsComponent,
    StringUtilsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
