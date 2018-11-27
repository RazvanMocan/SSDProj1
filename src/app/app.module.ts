import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchComponent } from './components/top-bar/search/search.component';
import { MyformComponent } from './components/top-bar/myform/myform.component';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './components/news/news.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopBarComponent,
    SearchComponent,
    MyformComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }