import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FlexLayoutModule} from "@angular/flex-layout";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/shared/header/header.component";
import {MainComponent} from "./components/main.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./app.material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
