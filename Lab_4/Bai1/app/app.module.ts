import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, StudentComponent],
  imports: [BrowserModule,
    AppRoutingModule,
     FormsModule,
  ],

  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
